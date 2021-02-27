const isAuthorized = (req, res, next) => {
    req.user
        ? next()
        : res.status(400).send('Unauthorized request. Log in and try again.');
};

// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
const getIdParam = (req) => {
    const id = req.params.id;

    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }

    throw new TypeError(`Invalid ':id' param: "${id}"`);
};

module.exports = { getIdParam, isAuthorized };
