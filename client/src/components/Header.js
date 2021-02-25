import { Row, Col } from '@geist-ui/react';
import HeaderControls from './HeaderControls';
import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Row>
                <Col>
                    <Row className={styles.logo} align='middle' justify='start'>
                        <h3>fragment</h3>
                    </Row>
                </Col>
                <Col>
                    <Row
                        className={styles.controls}
                        align='middle'
                        justify='end'
                    >
                        <HeaderControls />
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
