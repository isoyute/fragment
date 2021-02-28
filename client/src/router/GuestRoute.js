import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestRoute = ({ component: Component, ...rest }) => {
	const user = useSelector(state => state.user.user);

	return (
		<Route
			{...rest}
			render={props =>
				!user ? <Component {...props} /> : <Redirect to='/feed' />
			}
		/>
	);
};

export default GuestRoute;
