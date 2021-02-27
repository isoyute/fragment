import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post';
import styles from '../styles/Posts.module.scss';
import { SET_FEED_POSTS } from '../store/actions';
import axios from 'axios';
import env from 'react-dotenv';

const Posts = () => {
    const posts = useSelector((state) => state.feed.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`${env.REACT_APP_SERVER_URL}/api/posts`)
            .then((res) => res.data)
            .then((posts) => dispatch({ type: SET_FEED_POSTS, posts }))
            .catch((err) => console.log(err));
    }, [dispatch]);

    if (posts.length === 0) {
        return (
            <div className={[styles.posts, styles['not-loaded']].join(' ')}>
                Your feed is empty. Follow some users or start posting some code
                in order to see things here!
            </div>
        );
    }

    return (
        <div className={styles.posts}>
            {posts.map((post) => (
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
