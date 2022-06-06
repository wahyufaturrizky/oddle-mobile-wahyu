import axios from 'axios';
import {app_account_name, app_api_key, FAVORITE_URL_DEV} from 'utils/global';
import {GQL_GET_ALL_PRODUCT} from '../gql/product';
import {graphcms} from './requestHeader';

/**
 * @author https://www.linkedin.com/in/wahyu-fatur-rizky
 * @return { obj }
 * Custom Header axios,
 * create from
 * using this function should axios().get(values)
 */

export const fetchAllFavoriteProducts = () => {
  let config = {
    method: 'get',
    url: `${FAVORITE_URL_DEV}/api/accounts/${app_account_name}/favourites`,
    headers: {
      Authorization: app_api_key,
    },
  };
  return axios(config);
};

export const uncheckFavoriteById = (id) => {
  let config = {
    method: 'delete',
    url: `${FAVORITE_URL_DEV}/api/accounts/${app_account_name}/favourites/${id}`,
    headers: {
      Authorization: app_api_key,
    },
  };
  return axios(config);
};

export const checkFavoriteById = (id) => {
  let config = {
    method: 'patch',
    url: `${FAVORITE_URL_DEV}/api/accounts/${app_account_name}/favourites/${id}`,
    headers: {
      Authorization: app_api_key,
    },
  };
  return axios(config);
};

export const fetchAllProducts = () => {
  const result = graphcms.request(GQL_GET_ALL_PRODUCT);
  return result;
};
