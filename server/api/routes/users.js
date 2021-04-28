const router = require('express').Router();
const { models } = require('../../database');
const Op = require('sequelize').Op;

const isUserFollowing = (followerId, followableId) => {
	if (followerId === followableId) throw new Error('Cant follow yourself');

	return Promise.all([
		models.user.findOne({ where: { id: followerId } }),
		models.user.findOne({ where: { id: followableId } }),
	])
		.then(([follower, followed]) => {
			if (!follower) throw new Error('Follower does not exist');
			if (!followed) throw new Error('Followed does not exist');

			return models.userFollower
				.findOne({
					where: { userId: followerId, followerId: followableId },
				})
				.then(followerFollowed => (followerFollowed ? true : false));
		})
		.catch(err => {
			throw new Error('Could not perform the operation. ' + err.message);
		});
};

router
	.route('/users/:username')

	.get((req, res) => {
		models.user
			.findOne({
				include: [
					{
						model: models.user,
						as: 'followers',
						required: false,
						attributes: ['id'],
						through: { attributes: [] },
					},
					{
						model: models.user,
						as: 'following',
						required: false,
						attributes: ['id'],
						through: { attributes: [] },
					},
				],
				where: { username: req.params.username },
			})
			.then(user => {
				if (!user) throw new Error('Could not retrieve user.');

				return res.send(user);
			})
			.catch(e => {
				res.status(404);
				res.send({ error: e.message });
			});
	});

router
	.route('/users/:username/follow')

	.post((req, res) => {
		if (!req.user) {
			throw new Error('Must be logged in to access this route.');
		}

		models.user
			.findOne({ where: { username: req.params.username } })
			.then(userToFollow => {
				return isUserFollowing(req.user.id, userToFollow.id).then(
					isFollowing => {
						if (isFollowing) throw new Error('Already following this user.');

						return models.userFollower.create({
							userId: req.user.id,
							followerId: userToFollow.id,
						});
					}
				);
			})
			.then(() => res.send({ isFollowing: true }))
			.catch(e => {
				res.status(400);
				res.send({ error: e.message });
			});
	});

router
	.route('/users/:username/unfollow')

	.post((req, res) => {
		if (!req.user) {
			throw new Error('Must be logged in to access this route.');
		}

		models.user
			.findOne({ where: { username: req.params.username } })
			.then(userToUnfollow => {
				return isUserFollowing(req.user.id, userToUnfollow.id).then(
					isFollowing => {
						if (!isFollowing) throw new Error('Not following this user.');

						return models.userFollower.destroy({
							where: { userId: req.user.id, followerId: userToUnfollow.id },
						});
					}
				);
			})
			.then(() => res.send({ isFollowing: false }))
			.catch(e => {
				res.status(400);
				res.send({ error: e.message });
			});
	});

router
	.route('/users/following/:followedId')

	.get((req, res) => {
		if (!req.user) {
			throw new Error('Must be logged in to access this route.');
		}

		isUserFollowing(req.user.id, req.params.followedId)
			.then(isFollowing => res.send({ isFollowing }))
			.catch(e => {
				res.status(400);
				res.send({ error: e.message });
			});
	});

router
	.route('/users/search/:substring')

	.get((req, res) => {
		models.user
			.findAll({
				limit: 10,
				include: [
					{
						model: models.user,
						as: 'followers',
						required: false,
						attributes: ['id'],
						through: { attributes: [] },
					},
					{
						model: models.user,
						as: 'following',
						required: false,
						attributes: ['id'],
						through: { attributes: [] },
					},
				],
				where: {
					[Op.or]: [
						{
							username: {
								[Op.iLike]: `%${req.params.substring}%`,
							},
						},
						{
							name: {
								[Op.iLike]: `%${req.params.substring}%`,
							},
						},
					],
				},
			})
			.then(users => {
				if (!users || users.length < 1)
					throw new Error('Could not retrieve users or no users found.');

				res.send(users);
			})
			.catch(e => {
				res.status(404);
				res.send({ error: e.message });
			});
	});

module.exports = router;
