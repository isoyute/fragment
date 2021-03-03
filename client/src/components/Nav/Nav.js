import { Link } from 'react-router-dom';
import { Row, Col } from '@geist-ui/react';
import NavButtons from './NavButtons';
import styles from '../../styles/Nav.module.scss';

const Nav = () => {
	return (
		<div className={styles.nav}>
			<Row>
				<Col>
					<Row className={styles.logo} align='middle' justify='start'>
						<Link to='/'>
							<h3>fragment</h3>
						</Link>
					</Row>
				</Col>
				<Col>
					<Row className={styles.controls} align='middle' justify='end'>
						<NavButtons />
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Nav;
