import gql from 'graphql-tag';

// Exclamation mark means you have to provide 
// this argument.
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;