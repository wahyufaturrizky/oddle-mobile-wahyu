import {gql} from 'graphql-request';

export const GQL_GET_ALL_PRODUCT = gql`
query content_view_4436e536381443d18b1abc80c6b3665b(
) {
  page: productsConnection(stage:DRAFT) {
    edges {
      node {
        id
        stage
        updatedAt
        apiFeaturedImage
        brand
        category
        createdAt
        currency
        description
        id
        name
        price
        priceSign
        productApiUrl
        productID
        productLink
        productType
        publishedAt
        publishedBy {
          entryId: id
          name
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          }
        }
        rating
        scheduledIn(first: 200) {
          entryId: id
          id
          release {
            id
            status
            releaseAt
          }
          rawPayload
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          }
        }
        tagList
        updatedAt
        websiteLink
        createdBy {
          entryId: id
          name
          picture
          kind
          isActive
        }
        updatedBy {
          entryId: id
          name
          picture
          kind
          isActive
        }
        documentInStages(includeCurrent: true) {
          id
          stage
          updatedAt
          publishedAt
        }
      }
    }
    aggregate {
      count
    }
  }
}
`;
