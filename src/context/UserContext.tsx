import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export type User = {
  name: string;
  email: string;
  id: string;
} | null;

export interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
  isLoading: boolean
}

/** Defines user default context. */
const defaultContext = {
  user: null,
  setUser: () => { },
  isLoading: true,
} as IUserContext;

/** Provides User Context for other Components. */
export const UserContext = createContext(defaultContext);

type UserProviderProps = {
  /** Children Elements. */
  children: ReactNode;
};

/**
 * Create User Context Provider
 * @param {UserProviderProps} props Component Props.
 * @param {ReactNode} props.children Children Elements.
 * @returns {JSX.Element} provide user state for inner Components.
 */
export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const userCookie = Cookies.get('userJWT');
    console.log(userCookie);

    if (userCookie) {
      const decodedUser = JSON.parse(atob(userCookie.split('.')[1]));
      console.log(decodedUser);
      setUser(decodedUser);
    }

    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}