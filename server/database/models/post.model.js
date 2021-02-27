const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('post', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
        },
        description: {
            type: DataTypes.STRING,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
    });
};
