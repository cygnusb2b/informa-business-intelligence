import gql from 'graphql-tag';

export default gql`

query DirectorySections($sectionAlias: String!) {
  websiteSectionAlias(input: { alias: $sectionAlias }) {
    id
    name
    children(input: { sort: { field: name, order: asc }, pagination: { limit: 0 } }) {
      edges {
        node {
          id
          name
          alias
          children(input: { pagination: { limit: 1 } }) {
            totalCount
          }
        }
      }
    }
  }
}

`;
