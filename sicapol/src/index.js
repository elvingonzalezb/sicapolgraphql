import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'

const conexion = new ApolloClient({
  uri: 'http://localhost:4000'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={conexion}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
