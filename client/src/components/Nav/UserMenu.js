import { Link } from 'react-router-dom';
import { Popover, Link as OutLink } from '@geist-ui/react';
import { User, Settings, LogOut } from '@geist-ui/react-icons';
import styles from '../../styles/UserMenu.module.scss';

const UserMenu = ({ username }) => {
	return (
		<>
			<Popover.Item>
				<Link to={`/p/${username}`} className={styles.link}>
					<span className={styles.icon}>
						<User />
					</span>
					Profile
				</Link>
			</Popover.Item>
			<Popover.Item>
				<Link to='#' className={styles.link}>
					<span className={styles.icon}>
						<Settings />
					</span>
					Settings
				</Link>
			</Popover.Item>
			<Popover.Item line />
			<Popover.Item>
				<OutLink
					href={`${process.env.REACT_APP_SERVER_URL}/auth/github/logout`}
					className={styles.link}
				>
					<span className={styles.icon}>
						<LogOut size={24} />
					</span>
					Logout
				</OutLink>
			</Popover.Item>
		</>
	);
};

export default UserMenu;
