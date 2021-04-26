const { models } = require('../../database');
const Op = require('sequelize').Op;

async function getByUsername(req, res) {
	const user = await models.user.findOne({
		where: { username: req.params.username },
	});

	if (user) {
		return res.status(200).json(user);
	}

	return res.status(404).send('404 - Not found');
}

async function getAllByUsernameSubstring(req, res) {
	const users = await models.user.findAll({
		limit: 10,
		where: {
			username: {
				[Op.iLike]: `%${req.params.substring}%`,
			},
		},
	});

	if (users) {
		return res.status(200).json(users);
	}

	return res.status(400).send('400 - A substring must be provided');
}

module.exports = { getByUsername, getAllByUsernameSubstring };
