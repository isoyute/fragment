import { Link } from 'react-router-dom';
import { User } from '@geist-ui/react';
import styles from '../../styles/Post.module.scss';

const Post = ({ user, code, description }) => {
	return (
		<article className={styles.post}>
			<div className={styles.header}>
				<Link to={`/p/${user.username}`}>
					<User src={user.avatar} name={user.username} />
				</Link>
			</div>
			<div className={styles.code}>{code}</div>
			<div className={styles.description}>{description}</div>
		</article>
	);
};

export default Post;
