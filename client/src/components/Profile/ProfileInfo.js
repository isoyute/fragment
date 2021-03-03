import styles from '../../styles/ProfileInfo.module.scss';

const ProfileInfo = ({ profile }) => {
	return (
		<div className={styles['profile-info']}>
			<div className={styles.username}>
				<h2>{profile.username}</h2>
			</div>
			<div className={styles.numbers}>
				<div>
					{profile.postsCount} <span>posts</span>
				</div>
				<div>
					{profile.followersCount} <span>followers</span>
				</div>
				<div>
					{profile.followingCount} <span>following</span>
				</div>
			</div>
			<div className={styles.info}>
				<h5>{profile.name}</h5>
				<span>{profile.bio}</span>
			</div>
		</div>
	);
};

export default ProfileInfo;
