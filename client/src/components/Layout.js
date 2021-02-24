import { Page } from '@geist-ui/react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Content from './Content';
import Loading from './Loading';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
    const isPageLoading = useSelector((state) => state.page.isPageLoading);

    return isPageLoading ? (
        <Loading />
    ) : (
        <Page className={styles.app}>
            <Header />
            <Page.Content>
                <Content>{children}</Content>
            </Page.Content>
        </Page>
    );
};

export default Layout;
