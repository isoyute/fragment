const applyExtraSetup = (sequelize) => {
    // apply any extra setup like adding associations
    const { user, post } = sequelize.models;
    user.hasMany(post);
    post.belongsTo(user);
};

module.exports = { applyExtraSetup };
