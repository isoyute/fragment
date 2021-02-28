import Post from './Post';
import styles from '../styles/Posts.module.scss';

const Posts = ({ posts }) => {
	return (
		<>
			{posts.length === 0 ? (
				<div className={[styles.posts, styles['not-loaded']].join(' ')}>
					Your feed is empty. Follow some users or start posting some code in
					order to see things here!
				</div>
			) : (
				<div className={styles.posts}>
					{posts.map(post => (
						<Post
							key={post.id}
							user={post.user}
							code={post.code}
							description={post.description}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default Posts;
