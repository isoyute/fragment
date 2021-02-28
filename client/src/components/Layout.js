import { Page } from '@geist-ui/react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Content from './Content';
import Loading from './pages/Loading';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	const isPageLoading = useSelector(state => state.page.isLoading);

	return (
		<>
			{isPageLoading ? (
				<Loading />
			) : (
				<Page className={styles.app}>
					<Page.Header>
						<Header />
					</Page.Header>
					<Page.Content>
						<Content>{children}</Content>
					</Page.Content>
				</Page>
			)}
		</>
	);
};

export default Layout;
