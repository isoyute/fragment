import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Pages/Layout';
import PrivateRoute from './router/PrivateRoute';
import GuestRoute from './router/GuestRoute';
import Home from './components/Pages/Home';
import Feed from './components/Pages/Feed';
import Profile from './components/Pages/Profile';
import Unauthorized from './components/Pages/Unauthorized';
import NotFound from './components/Pages/NotFound';
import { fetchUser } from './api/user';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<Router>
			<Layout>
				<Switch>
					<GuestRoute path='/' exact component={Home} />
					<PrivateRoute path='/feed' exact component={Feed} />
					<Route path='/p/:username' exact component={Profile} />
					<Route path='/error/401' component={Unauthorized} />
					<Route path='*' exact component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
