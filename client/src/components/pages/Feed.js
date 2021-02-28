import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '@geist-ui/react';
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
				<Spinner size='large' />
			) : (
				<div className={styles.feed}>
					<Posts posts={posts} />
				</div>
			)}
		</>
	);
};

export default Feed;
