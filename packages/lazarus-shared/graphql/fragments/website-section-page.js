const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionPageFragment on WebsiteSection {
  id
  name
  description
  hierarchy {
    id
    alias
    name
  }
  labels
  logo {
    id
    src(input: { options: { h: 100 } })
  }
  coverImage {
    id
    src(input: { options: { w: 1280 } })
  }
  isRoot
  children(input: { sort: { field: name, order: asc } }) {
    edges {
      node {
        id
        name
        alias
        canonicalPath
      }
    }
  }
}
`;
