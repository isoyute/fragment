import styles from '../styles/Content.module.scss';

const Content = ({ children }) => {
	return <div className={styles.content}>{children}</div>;
};

export default Content;
