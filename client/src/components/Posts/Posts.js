import Post from './Post';
import styles from '../../styles/Posts.module.scss';

const Posts = ({ posts }) => {
	return (
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
	);
};

export default Posts;
