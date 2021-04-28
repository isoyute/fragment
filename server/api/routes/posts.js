const router = require('express').Router();
const { models } = require('../../database');
const { Op } = require('sequelize');

router
	.route('/posts')

	.get((req, res) => {
		models.post
			.findAll({
				include: models.user,
				order: [['createdAt', 'DESC']],
			})
			.then(posts => {
				if (!posts) throw new Error('Could not retrieve posts.');

				return res.send(posts);
			})
			.catch(e => {
				res.status(404);
				res.send({ error: e.message });
			});
	})

	.post((req, res) => {
		if (req.body.id) {
			return res.status(400).send({
				error: `Bad request: ID should not be provided, since it is determined automatically by the database`,
			});
		}

		if (!req.body.userId) {
			return res.status(400).send({
				error: `Bad request: ID of the user the post belongs to must be provided`,
			});
		}

		if (!req.body.description) {
			return res.status(400).send({
				error: `Bad request: A post description must be provided`,
			});
		}

		models.post
			.create(req.body)
			.then(post => {
				return res.send(post);
			})
			.catch(e => {
				res.status(400);
				res.send({ error: e.message });
			});
	});

router
	.route('/posts/following')

	.get((req, res) => {
		if (!req.user) {
			throw new Error('Must be logged in to access this route.');
		}

		const following = req.user.following.map(obj => obj.id);
		following.push(req.user.id);

		models.post
			.findAll({
				limit: 50,
				include: models.user,
				order: [['createdAt', 'DESC']],
				where: {
					userId: following,
				},
			})
			.then(posts => {
				if (!posts) throw new Error('Could not retrieve posts.');

				return res.send(posts);
			})
			.catch(e => {
				res.status(404);
				res.send({ error: e.message });
			});
	});

router
	.route('/posts/:id')

	.get((req, res) => {
		models.post
			.findByPk(req.params.id, {
				include: models.user,
			})
			.then(post => {
				if (!post) throw new Error('Post not found');

				return res.send(post);
			})
			.catch(e => {
				res.status(404);
				res.send({ error: e.message });
			});
	});

module.exports = router;
