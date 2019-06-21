import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo'
import mutate from '../mutations/SignUp';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';


export class SignupForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: []
        }
    }

    componentWillUpdate(nextProps) {
        // this.props;// the old current set of props
        // nextProps // athe next sets of props that will be in place when components rerenderers
        if (!this.props.data.user && nextProps.data.user) {
            //redirect to dashboard
            hashHistory.push('/dashboard');
        }
    }
    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(e => {
            const errors = e.graphQLErrors.map(error => error.message);
            this.setState({ errors })
        })
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}

export default graphql(query)(graphql(mutate)(SignupForm));