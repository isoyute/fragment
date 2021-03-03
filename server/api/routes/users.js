const { models } = require('../../database');

async function getByUsername(req, res) {
	const user = await models.user.findOne({
		where: { username: req.params.username },
	});

	if (user) {
		return res.status(200).json(user);
	}

	return res.status(404).send('404 - Not found');
}

module.exports = { getByUsername };
