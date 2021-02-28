const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = sequelize => {
	sequelize.define('post', {
		id: {
			primaryKey: true,
			allowNull: false,
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
		},
		description: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				len: [4, 255],
			},
		},
		tags: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
	});
};
