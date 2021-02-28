import { useState } from 'react';
import { PlusCircle } from '@geist-ui/react-icons';
import { Popover, Avatar, Spinner, Link } from '@geist-ui/react';
import { useSelector } from 'react-redux';
import NewPost from './NewPost';
import UserMenu from './UserMenu';
import env from 'react-dotenv';
import styles from '../styles/HeaderControls.module.scss';

const HeaderControls = () => {
	const [isButtonLoading, setIsButtonLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const user = useSelector(state => state.user.user);

	return (
		<>
			{user ? (
				<div className={styles.controls}>
					<PlusCircle onClick={() => setIsModalOpen(true)} />
					<NewPost
						user={user}
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
					/>
					<Popover content={UserMenu}>
						<Avatar className={styles.user} src={user.avatar} size='small' />
					</Popover>{' '}
				</div>
			) : (
				<>
					<Link
						color
						href={`${env.REACT_APP_SERVER_URL}/auth/github/login`}
						onClick={() => setIsButtonLoading(true)}
					>
						{isButtonLoading ? <Spinner /> : <>Login with GitHub</>}
					</Link>
				</>
			)}
		</>
	);
};

export default HeaderControls;
