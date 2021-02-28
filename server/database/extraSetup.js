const applyExtraSetup = sequelize => {
	// apply any extra setup like adding associations
	const { user, post } = sequelize.models;
	user.hasMany(post, { foreignKey: { allowNull: false } });
	post.belongsTo(user);
};

module.exports = { applyExtraSetup };
