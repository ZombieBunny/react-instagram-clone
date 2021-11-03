import './App.css';
import Header from './components/header';
import Posts from './components/posts';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    // connect to pusher
    this.pusher = new Pusher("259a2fbbbb4559526c15", {
      cluster: 'ap2',
      encrypted: true
    });
  }

  componentDidMount() {
    if ('actions' in Notification.prototype) {
      alert('You can enjoy the notification feature');
    } else {
      alert('Sorry notifications are NOT supported on your browser');
    }
  }


  render() {
    const client = new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache()
    });
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            <Posts pusher={this.pusher} apollo_client={client} />
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
