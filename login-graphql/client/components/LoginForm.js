import React, { Component } from 'react'
import AuthForm from './AuthForm';
import mutate from '../mutations/Login';
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser';

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: []
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
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}
export default graphql(query)(graphql(mutate)(LoginForm));