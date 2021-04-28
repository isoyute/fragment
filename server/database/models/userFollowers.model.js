const { DataTypes } = require('sequelize');

module.exports = sequelize => {
	sequelize.define('userFollower', {
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
		},
		followerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
		},
	});
};
