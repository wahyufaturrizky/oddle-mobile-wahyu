import {Request} from './requestHeader';

/**
 * @author https://www.linkedin.com/in/wahyu-fatur-rizky
 * @return { obj }
 * Custom Header axios,
 * create from
 * using this function should axios().get(values)
 */

export const registerAccount = (data) => {
  const result = Request().post('/register', data);
  return result;
};
