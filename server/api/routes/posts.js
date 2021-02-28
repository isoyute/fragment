const { models } = require('../../database');

async function getAll(req, res) {
	const posts = await models.post.findAll({
		include: models.user,
		order: [['createdAt', 'DESC']],
	});
	return res.status(200).json(posts);
}

async function getById(req, res) {
	const post = await models.post.findByPk(req.params.id, {
		include: models.user,
	});

	if (post) {
		return res.status(200).json(post);
	}

	return res.status(404).send('404 - Not found');
}

async function create(req, res) {
	if (req.body.id) {
		return res
			.status(400)
			.send(
				`Bad request: ID should not be provided, since it is determined automatically by the database`
			);
	}

	if (!req.body.userId) {
		return res
			.status(400)
			.send(`Bad request: ID of the user the post belongs to must be provided`);
	}

	if (!req.body.description) {
		return res
			.status(400)
			.send(`Bad request: A post description must be provided`);
	}

	await models.post.create(req.body);
	return res.status(201).end();
}

async function update(req, res) {
	// we only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === req.params.id) {
		await models.post.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).end();
	} else {
		res
			.status(400)
			.send(
				`Bad request: param ID (${req.params.id}) does not match body ID (${req.body.id}).`
			);
	}
}

module.exports = {
	getAll,
	getById,
	create,
	update,
};
