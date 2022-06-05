import axios from 'axios';
import {URL_DEV} from 'utils/global';
/**
 * @author https://www.linkedin.com/in/wahyu-fatur-rizky
 * @return { obj }
 * Custom Header axios,
 * create from
 * using this function should axios().get(values)
 */

export const Request = () => {
  return axios.create({
    baseURL: URL_DEV,
  });
};
