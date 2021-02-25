const isAuthorized = (req, res, next) => {
    req.user ? next() : res.redirect(`${process.env.CLIENT_URL}/error/401`);
};

module.exports = { isAuthorized };
