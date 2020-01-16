const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionDirectoryPageFragment on WebsiteSection {
  id
  name
  description
  hierarchy {
    id
    alias
    name
  }
}
`;
