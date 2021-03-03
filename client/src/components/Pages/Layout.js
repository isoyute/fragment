import { Page } from '@geist-ui/react';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Loading from './Loading';
import styles from '../../styles/Layout.module.scss';

const Layout = ({ children }) => {
	const isPageLoading = useSelector(state => state.page.isLoading);

	return (
		<>
			{isPageLoading ? (
				<Loading />
			) : (
				<Page className={styles.app}>
					<Page.Header>
						<Nav />
					</Page.Header>
					<Page.Content>
						<div className={styles.content}>{children}</div>
					</Page.Content>
				</Page>
			)}
		</>
	);
};

export default Layout;
