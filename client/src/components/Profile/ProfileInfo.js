import FollowButton from '../Buttons/FollowButton';
import styles from '../../styles/ProfileInfo.module.scss';

const ProfileInfo = ({
	profile,
	isOwnProfile,
	isFollowing,
	setIsFollowing,
}) => {
	return (
		<div className={styles['profile-info']}>
			<div className={styles.username}>
				<h2>{profile.username}</h2>
				{!isOwnProfile && (
					<FollowButton
						username={profile.username}
						setIsFollowing={setIsFollowing}
						isFollowing={isFollowing}
					/>
				)}
			</div>
			<div className={styles.numbers}>
				<div>
					{profile.followers.length || 0} <span>followers</span>
				</div>
				<div>
					{profile.following.length || 0} <span>following</span>
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
