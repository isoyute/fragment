import { Page } from '@geist-ui/react';
import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <Page.Header>
            <div className={styles.header}>
                <h3>fragment</h3>
            </div>
        </Page.Header>
    );
};

export default Header;
