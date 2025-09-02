import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://o5oigp2v.api.sanity.io/v2023-08-01/graphql/production/default",
  cache: new InMemoryCache(),
});

export default client;
