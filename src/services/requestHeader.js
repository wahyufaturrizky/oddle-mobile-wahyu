import axios from 'axios';
import {GraphQLClient} from 'graphql-request';
import {
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  FAVORITE_URL_DEV,
  app_api_key,
} from 'utils/global';
/**
 * @author https://www.linkedin.com/in/wahyu-fatur-rizky
 * @return { obj }
 * Custom Header graphql,
 * create from
 * using graphql request
 */

export const graphcms = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
  },
});
