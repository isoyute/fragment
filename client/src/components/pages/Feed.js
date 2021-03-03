import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '@geist-ui/react';
import { fetchPosts } from '../../api/posts';
import Posts from '../Posts';
import styles from '../../styles/Feed.module.scss';

const Feed = () => {
	const posts = useSelector(state => state.feed.posts);
	const isLoading = useSelector(state => state.feed.isLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<>
			{isLoading ? (
				<div className={styles.feed}>
					<Loading size='large'>Loading feed</Loading>
				</div>
			) : (
				<div className={styles.feed}>
					<Posts posts={posts} />
				</div>
			)}
		</>
	);
};

export default Feed;
