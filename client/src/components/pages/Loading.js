import { Spinner } from '@geist-ui/react';
import styles from '../../styles/Loading.module.scss';

const Loading = () => {
	return (
		<div className={styles.loading}>
			<Spinner size='large' />
			<p>
				Loading <strong>fragment</strong> ...
			</p>
		</div>
	);
};

export default Loading;
