const applyExtraSetup = sequelize => {
	// apply any extra setup like adding associations
	const { user, post, userFollower } = sequelize.models;
	user.hasMany(post, { foreignKey: { allowNull: false } });
	post.belongsTo(user);

	user.belongsToMany(user, {
		foreignKey: 'userId',
		as: 'following',
		through: userFollower,
	});
	user.belongsToMany(user, {
		foreignKey: 'followerId',
		as: 'followers',
		through: userFollower,
	});
};

module.exports = { applyExtraSetup };
