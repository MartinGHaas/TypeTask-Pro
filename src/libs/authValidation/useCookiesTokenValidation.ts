// Types
import { ITokenUser } from '@/@types/user';

// Libs
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '@/state/user/userSlice';
import useUserValidation from '../userValidation/useUserValidation';

const useCookiesTokenValidation = () => {

  const dispatch = useDispatch();
  const userValidation = useUserValidation();

  const dispatchAuthenticatedUser = () => {
    if (!hasValidProperties()) throw new Error("⚠️ - Invalid token type!");
    dispatch(setUser(getUserByToken()));
  }

  const getUserByToken = (): ITokenUser => {
    const decodedUser: ITokenUser = JSON.parse(atob(getJwtToken().split('.')[1]));
    return decodedUser;
  }

  const getJwtToken = (): string => {
    return Cookies.get('userJWT') || '';
  }

  const hasValidProperties = (): boolean => {

    try {
      const user: ITokenUser = getUserByToken();
      return userValidation.validateTokenUser(user);
    } catch (error) {
      return false;
    }
  }

  const isEmpty = (): boolean => {
    return getJwtToken() === '';
  }

  return {
    dispatchAuthenticatedUser,
    getJwtUser: getUserByToken,
    getJwt: getJwtToken,
    hasValidProperties,
    isEmpty
  };
}

export default useCookiesTokenValidation;