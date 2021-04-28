import { useState, useEffect } from 'react';
import { Avatar, Row, Col, useToasts } from '@geist-ui/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileInfo from '../Profile/ProfileInfo';
import NotFound from './NotFound';
import axios from 'axios';
import { isFollowingUser } from '../../api/user';
import styles from '../../styles/Profile.module.scss';

const Profile = () => {
	const [, setToast] = useToasts();
	const [error, setError] = useState('');
	const [profile, setProfile] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isFollowing, setIsFollowing] = useState(false);
	const user = useSelector(state => state.user.user);
	const { username } = useParams();

	useEffect(() => {
		if (!username) return;

		// set the profile to a loading state before attempting to pull the user
		setIsLoading(true);

		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/api/users/${username}`)
			.then(response => {
				setError('');
				setProfile(response.data);

				return isFollowingUser(response.data.id, setIsFollowing);
			})
			.then(followingStatus => setIsFollowing(followingStatus.data.isFollowing))
			.catch(() =>
				setError('An error was encountered loading the profile. Try again!')
			)
			.finally(() => setIsLoading(false));
	}, [username, isFollowing]);

	useEffect(() => {
		if (!error) return;

		setToast({
			type: 'error',
			text: 'An error was encountered loading the profile. Try again!',
			delay: 5000,
		});

		// eslint-disable-next-line
	}, [error]);

	if (error) {
		return <NotFound />;
	}

	return (
		<div className={styles.profile}>
			{isLoading ? (
				<></>
			) : (
				<Row>
					<Col span={4}>
						<Avatar src={profile.avatar} size='large' />
					</Col>
					<Col>
						<ProfileInfo
							isOwnProfile={user.username === username}
							isFollowing={isFollowing}
							setIsFollowing={setIsFollowing}
							profile={profile}
						/>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default Profile;
