const router = require('express').Router();
const passport = require('passport');

// route to call the github login redirect
router.get('/login', passport.authenticate('github', { scope: ['read:user'] }));

// route hit by github after the user presses login
router.get(
    '/callback',
    passport.authenticate('github', {
        successRedirect: `${process.env.CLIENT_URL}/feed`,
        failureRedirect: process.env.CLIENT_URL,
    })
);

// route hit by the client to attempt to retrieve the logged in user
router.get('/user', (req, res) => {
    if (req.user) {
        return res.json({ user: req.user });
    }

    return res.json({ error: 'not logged in' });
});

// route hit by the client to log out the user
router.get('/logout', (req, res) => {
    if (req.user) {
        req.logOut();
    }

    res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
