import React, { Component } from 'react'
import CurrentUser from '../queries/CurrentUser';
import { graphql } from 'react-apollo'

export default (WrappedComponent) => {

    class requireAuth extends Component {

        componentWillUpdate(nextProps) {
            if (!nextProps.data.loading && !nextProps.data.user) {
                this.props.history.push('/login');
            }
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    return graphql(CurrentUser)(requireAuth);
};


