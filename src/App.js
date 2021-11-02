import './App.css';
import Header from './components/header';
import Post from './components/post';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider } from "react-apollo";


function App() {

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <section className="App-main">
          <Post />
        </section>
      </div>
    </ApolloProvider>
  );
}

export default App;
