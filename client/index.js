import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// styles
import './style/style.css';

// components
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

// dataIdFromObject
// Identifier of the 'data' from every request.
// i.e.: Taking the IDs from all of our different records
// and associating that with our components inside
// the React application. ALl behind the scenes.
const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

// ApolloProvider is wrapping the entire Router
// hashHistory
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SongList} />
          <Route path='/songs/new' component={SongCreate} />
          <Route path='/songs/:id' component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
