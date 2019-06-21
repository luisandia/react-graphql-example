import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo'
import mutate from '../mutations/SignUp';
import query from '../queries/CurrentUser';


export class SignupForm extends Component {

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
                <h3>Sign Up</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}

export default graphql(query)(graphql(mutate)(SignupForm));