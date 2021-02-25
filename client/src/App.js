import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './router/PrivateRoute';
import GuestRoute from './router/GuestRoute';
import Home from './components/pages/Home';
import Feed from './components/pages/Feed';
import Unauthorized from './components/pages/Unauthorized';
import NotFound from './components/pages/NotFound';
import { SET_USER, SET_IS_PAGE_LOADING } from './store/actions';
import env from 'react-dotenv';
import axios from 'axios';

const api = axios.create({ withCredentials: true });

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // set the state of the application to isAuthenticatingUser
        dispatch({
            type: SET_IS_PAGE_LOADING,
            isPageLoading: true,
        });

        // try to authenticate the user
        api.get(`${env.REACT_APP_SERVER_URL}/auth/github/user`)
            .then((res) => res.data)
            .then((data) => dispatch({ type: SET_USER, user: data.user }))
            .catch((err) => console.log(err))
            .finally(() =>
                dispatch({
                    type: SET_IS_PAGE_LOADING,
                    isPageLoading: false,
                })
            );
    }, [dispatch]);

    return (
        <Router>
            <Layout>
                <Switch>
                    <GuestRoute path='/' exact component={Home} />
                    <PrivateRoute path='/feed' exact component={Feed} />
                    <Route path='/error/401' component={Unauthorized} />
                    <Route path='*' exact component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
