const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extraSetup');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	logging: false,
});

const modelDefiners = [
	require('./models/user.model'),
	require('./models/post.model'),
];

// all models are defined according to their files
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// any extra setup after the models are defined, such as adding associations
applyExtraSetup(sequelize);

module.exports = sequelize;
