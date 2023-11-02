import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type User = {
  isLogged: boolean;
}

export interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
}

/** Defines user default state. */
const defaultState = {
  user: {
    isLogged: false
  },
  setUser: () => { }
} as IUserContext;

/** Provides User Context for other Components to use. */
export const UserContext = createContext(defaultState);

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
  const [user, setUser] = useState<User>({
    isLogged: false
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}