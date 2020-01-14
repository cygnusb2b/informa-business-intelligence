import gql from 'graphql-tag';

export default gql`

query RootDirectorySections($rootAlias: String!) {
  websiteSectionAlias(input: { alias: $rootAlias }) {
    id
    name
    children(input: { sort: { field: name, order: asc }, pagination: { limit: 0 } }) {
      edges {
        node {
          id
          name
          alias
        }
      }
    }
  }
}

`;
