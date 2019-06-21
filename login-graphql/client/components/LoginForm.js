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

    componentWillUpdate(nextProps) {
        // this.props;// the old current set of props
        // nextProps // athe next sets of props that will be in place when components rerenderers
        if (!this.props.data.user && nextProps.data.user) {
            //redirect to dashboard
            this.props.history.push('/dashboard');
        }
    }

    onSubmit({ email, password }) {
        console.log(this.props)
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
                <h3>Login</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}
export default graphql(query)(graphql(mutate)(LoginForm));