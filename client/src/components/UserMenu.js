import { Popover, Link } from '@geist-ui/react';
import { User, Settings, LogOut } from '@geist-ui/react-icons';
import env from 'react-dotenv';
import styles from '../styles/UserMenu.module.scss';

const UserMenu = () => {
	return (
		<>
			<Popover.Item>
				<span className={styles.icon}>
					<User />
				</span>
				<Link href='#'>Profile</Link>
			</Popover.Item>
			<Popover.Item>
				<span className={styles.icon}>
					<Settings />
				</span>
				<Link href='#'>Settings</Link>
			</Popover.Item>
			<Popover.Item line />
			<Popover.Item>
				<Link href={`${env.REACT_APP_SERVER_URL}/auth/github/logout`}>
					<span className={styles.icon}>
						<LogOut size={24} />
					</span>
					Logout
				</Link>
			</Popover.Item>
		</>
	);
};

export default UserMenu;
