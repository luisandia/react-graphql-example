import gql from 'graphql-tag'

// query is not being executed here - just defined.
export default gql`
query SongQuery($id:ID!){
    song(id:$id) {
      id
      title,
      lyrics{
          id
          content
      }
    }
  }`;