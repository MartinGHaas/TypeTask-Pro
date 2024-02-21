import { ITokenUser } from "@/@types/user";


const useUserValidation = () => {

  const validateTokenUser = (user: ITokenUser): boolean => {

    return (
      user.exp >= 0
      && user.iss === 'auth-api'
      && user.sub !== ''
    );
  }

  return {
    validateTokenUser
  };
}

export default useUserValidation;