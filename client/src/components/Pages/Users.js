import qs from 'qs';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserByUsername } from '../../api/user';
import UserResult from '../User/UserResult';

const Users = ({ location }) => {
	const dispatch = useDispatch();
	const results = useSelector(state => state.user.usersSearchResult) || [];

	useEffect(() => {
		const query = qs.parse(location.search, {
			ignoreQueryPrefix: true,
			parameterLimit: 1,
		});

		if (query && query.s) {
			dispatch(fetchUserByUsername(query.s));
		}
	}, [location.search, dispatch]);

	if (results.length === 0) {
		return <div>no users found.</div>;
	}

	return (
		<div>
			{results.map(user => (
				<UserResult key={user.id} user={user} />
			))}
		</div>
	);
};

export default Users;
