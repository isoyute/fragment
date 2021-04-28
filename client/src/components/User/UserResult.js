import { Row, User } from '@geist-ui/react';

const UserResult = ({ user }) => {
	return (
		<Row justify='center' align='middle'>
			<User src={user.avatar} name={user.name}>
				<User.Link href={`/p/${user.username}`}>@{user.username}</User.Link>
			</User>
		</Row>
	);
};

export default UserResult;
