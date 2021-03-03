import { useState } from 'react';
import { PlusCircle } from '@geist-ui/react-icons';
import { Popover, Avatar, Spinner, Link as OutLink } from '@geist-ui/react';
import { useSelector } from 'react-redux';
import NewPost from '../Posts/NewPost';
import UserMenu from './UserMenu';
import styles from '../../styles/NavButtons.module.scss';

const NavButtons = () => {
	const [isButtonLoading, setIsButtonLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const user = useSelector(state => state.user.user);

	return user ? (
		<div className={styles.buttons}>
			<PlusCircle onClick={() => setIsModalOpen(true)} />
			<NewPost
				user={user}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
			<Popover trigger='hover' content={<UserMenu username={user.username} />}>
				<Avatar className={styles.user} src={user.avatar} size='small' />
			</Popover>
		</div>
	) : (
		<>
			<OutLink
				color
				href={`${process.env.REACT_APP_SERVER_URL}/auth/github/login`}
				onClick={() => setIsButtonLoading(true)}
			>
				{isButtonLoading ? <Spinner /> : <>Login with GitHub</>}
			</OutLink>
		</>
	);
};

export default NavButtons;
