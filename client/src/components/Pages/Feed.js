import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '@geist-ui/react';
import { fetchPosts } from '../../api/posts';
import Posts from '../Posts/Posts';
import styles from '../../styles/Feed.module.scss';

const Feed = () => {
	const posts = useSelector(state => state.feed.posts);
	const isLoading = useSelector(state => state.feed.isLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	if (isLoading) {
		return <Loading size='large'>Loading feed</Loading>;
	}

	return (
		<div className={styles.feed}>
			{posts.length > 0 ? (
				<Posts posts={posts} />
			) : (
				<div className={styles.empty}>
					Nothing to see here. Follow some users or start posting some code in
					order to populate your feed!
				</div>
			)}
		</div>
	);
};

export default Feed;
