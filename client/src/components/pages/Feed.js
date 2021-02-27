import Posts from '../Posts';
import styles from '../../styles/Feed.module.scss';

const Feed = () => {
    return (
        <div className={styles.feed}>
            <Posts />
        </div>
    );
};

export default Feed;
