const cors = require('cors');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const compression = require('compression');
const GitHubStrategy = require('passport-github2').Strategy;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('../database');
const User = db.models.user;

const api = express();

// SESSION
api.use(
	session({
		name: 'GitHub.oauth2',
		secret: process.env.SESSION_SECRET,
		store: new SequelizeStore({ db }),
		resave: false,
		saveUninitialized: false,
		checkExpirationInterval: 15 * 60 * 1000,
		expiration: 30 * 24 * 60 * 60 * 1000,
		cookie: {
			maxAge: 24 * 60 * 60 * 1000,
		},
	})
);

// PASSPORT
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findOne({
		include: [
			{
				model: User,
				as: 'followers',
				required: false,
				attributes: ['id'],
				through: { attributes: [] },
			},
			{
				model: User,
				as: 'following',
				required: false,
				attributes: ['id'],
				through: { attributes: [] },
			},
		],
		where: { id },
	})
		.then(user => done(null, user))
		.catch(() => done(new Error('failed to deserialize a user.')));
});

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT,
			clientSecret: process.env.GITHUB_SECRET,
			callbackURL: '/auth/github/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			const data = profile._json;

			// retrieve the user or create a new one to pass to the client
			User.findOrCreate({
				where: { id: data.id },
				defaults: {
					username: data.login,
					name: data.name,
					url: data.html_url,
					avatar: data.avatar_url,
					email: data.email,
				},
			})
				.then(user => done(null, user[0].get({ plain: true })))
				.catch(error => done(error, null));
		}
	)
);

api.use(passport.initialize());
api.use(passport.session());

// MIDDLEWARE
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(compression());
api.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
);

// ROUTES
api.use('/auth/github', require('./routes/auth'));
api.use('/api', require('./routes/posts'));
api.use('/api', require('./routes/users'));

module.exports = api;
