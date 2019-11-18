const gql = require('graphql-tag');

module.exports = gql`

type Query {
  ping: String!
}

type Mutation {
  ping: String!
}

`;
