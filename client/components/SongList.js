import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    // Why use ...data.refetch() as opposed to 'refetchQueries: [{ query }]'?
    // It really depends on how exactly you are trying to update your query
    // associate with which component in the hierarchy.

    // If the update pertains to the same level on the hierarchy,
    // then the 'refetch' function comes as a prop.
    // And GraphQL knows that the mutation is associated with the component.
    this.props.mutate({
      variables: {
        id
      }
    }).then(() => this.props.data.refetch());    
  }

  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        <Link to={`/songs/${id}`}>
          <li key={id} className="collection-item">
            {title}
            <i 
              className="material-icons"
              onClick={() => this.onSongDelete(id)}
            >
              delete
            </i>
          </li>
        </Link>
      )
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to='/songs/new' className="btn-floating btn-large red right"><i className="material-icons">add</i></Link>
      </div>
    )
  }
}

// How to make GraphQL have the component to accept multiple
// Queries and Mutation
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);