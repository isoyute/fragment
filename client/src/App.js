import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Pages/Layout';
import PrivateRoute from './router/PrivateRoute';
import GuestRoute from './router/GuestRoute';
import Home from './components/Pages/Home';
import Feed from './components/Pages/Feed';
import Users from './components/Pages/Users';
import Profile from './components/Pages/Profile';
import Unauthorized from './components/Pages/Unauthorized';
import NotFound from './components/Pages/NotFound';
import { fetchLoggedInUser } from './api/user';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLoggedInUser());
	}, [dispatch]);

	return (
		<Router>
			<Layout>
				<Switch>
					<GuestRoute path='/' exact component={Home} />
					<PrivateRoute path='/feed' exact component={Feed} />
					<PrivateRoute path='/users' exact component={Users} />
					<Route path='/p/:username' exact component={Profile} />
					<Route path='/error/401' component={Unauthorized} />
					<Route path='*' exact component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
