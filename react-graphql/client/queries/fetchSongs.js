import gql from 'graphql-tag'

// query is not being executed here - just defined.
export default gql`
  {
    songs {
      id
      title
    }
  }`;