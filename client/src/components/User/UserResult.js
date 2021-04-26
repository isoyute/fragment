import { Row, User } from '@geist-ui/react';

const UserResult = ({ user }) => {
	return (
		<Row justify='space-between' align='middle'>
			<User src={user.avatar} name={user.name}>
				<User.Link href={`/p/${user.username}`}>@{user.username}</User.Link>
			</User>
			<button>follow</button>
		</Row>
	);
};

export default UserResult;
