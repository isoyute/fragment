const { DataTypes } = require('sequelize');

module.exports = sequelize => {
	sequelize.define('user', {
		id: {
			primaryKey: true,
			unique: true,
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		bio: {
			type: DataTypes.STRING,
			defaultValue: '',
			validate: {
				len: [0, 255],
			},
		},
		url: {
			type: DataTypes.STRING,
		},
		avatar: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
	});
};
