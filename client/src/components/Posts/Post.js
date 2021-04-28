import { Link } from 'react-router-dom';
import { User } from '@geist-ui/react';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from '../../styles/Post.module.scss';

const Post = ({ user, code, description }) => {
	return (
		<article className={styles.post}>
			<div className={styles.header}>
				<Link to={`/p/${user.username}`}>
					<User src={user.avatar} name={user.username} />
				</Link>
			</div>
			<SyntaxHighlighter
				className={styles.code}
				language='javascript'
				style={solarizedLight}
			>
				{code}
			</SyntaxHighlighter>
			<div className={styles.description}>{description}</div>
		</article>
	);
};

export default Post;
