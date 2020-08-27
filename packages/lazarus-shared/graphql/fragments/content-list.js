const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentListFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  labels
  published
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
  ... on ContentPromotion {
    linkText
    linkUrl
    # needed for handling bluecomic promotion redirects
    promotionContext: siteContext(input: { enableLinkUrl: false }) {
      path
    }
  }
  ... on ContentWebinar {
    startDate
  }
  ... on ContentEvent {
    startDate
    endDate
  }
}

`;
