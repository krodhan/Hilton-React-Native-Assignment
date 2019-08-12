import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./hilton";
import Routes from "./routes";

export default class App extends React.PureComponent {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
