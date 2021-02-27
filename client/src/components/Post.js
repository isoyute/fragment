import { User, Link } from '@geist-ui/react';
import styles from '../styles/Post.module.scss';

const Post = ({ user, code, description }) => {
    return (
        <article className={styles.post}>
            <div className={styles.header}>
                <Link href={user.url}>
                    <User src={user.avatar} name={user.username} />
                </Link>
            </div>
            <div className={styles.code}>{code}</div>
            <div className={styles.description}>{description}</div>
        </article>
    );
};

export default Post;
