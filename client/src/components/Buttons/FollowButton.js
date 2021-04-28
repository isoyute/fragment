import { useState } from 'react';
import { Spinner } from '@geist-ui/react';
import styles from '../../styles/FollowButton.module.scss';
import { toggleFollow } from '../../api/user';

const FollowButton = ({ username, isFollowing, setIsFollowing }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleButtonClick = () => {
		setIsLoading(true);

		toggleFollow(username, isFollowing)
			.then(response => {
				setIsLoading(false);
				setIsFollowing(response.data.isFollowing);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className={styles['follow-button']} onClick={handleButtonClick}>
			{isLoading ? <Spinner /> : isFollowing ? 'unfollow' : 'follow'}
		</div>
	);
};

export default FollowButton;
