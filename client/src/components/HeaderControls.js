import { useState } from 'react';
import { Popover, Avatar, Spinner, Link } from '@geist-ui/react';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import env from 'react-dotenv';
import styles from '../styles/HeaderControls.module.scss';

const HeaderControls = () => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const user = useSelector((state) => state.user.user);

    return user ? (
        <Popover content={UserMenu}>
            <Avatar className={styles.user} src={user.avatar} size='small' />
        </Popover>
    ) : (
        <Link
            color
            href={`${env.REACT_APP_SERVER_URL}/auth/github/login`}
            onClick={() => setIsButtonLoading(true)}
        >
            {isButtonLoading ? <Spinner /> : <>Login with GitHub</>}
        </Link>
    );
};

export default HeaderControls;
