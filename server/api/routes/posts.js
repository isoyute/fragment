const { models } = require('../../database');

async function getAll(req, res) {
    const posts = await models.post.findAll({ include: models.user });
    res.status(200).json(posts);
}

async function getById(req, res) {
    const post = await models.post.findByPk(req.params.id, {
        include: models.user,
    });
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(
            `Bad request: ID should not be provided, since it is determined automatically by the database.`
        );
    } else {
        await models.post.create(req.body);
        res.status(201).end();
    }
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
        res.status(400).send(
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
