import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';

import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { BrowserRouter as Router, Route, hashHistory, browserHistory,Switch ,HashRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import SignupForm  from './components/SignupForm';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    // opts:{
    //   credentials:'same-origin'
    // }
})

const client = new ApolloClient({
    cache,
    link
})
const Root = () => {
    return (
        <ApolloProvider client={client}>
            <HashRouter history={browserHistory}>
                <App>
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/signup" component={SignupForm} />
                    </Switch>
                </App>
            </HashRouter>
        </ApolloProvider>
    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));
