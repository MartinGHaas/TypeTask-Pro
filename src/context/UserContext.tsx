import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type User = {
  isLogged: boolean;
}

export interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
  user: {
    isLogged: false
  },
  setUser: () => {}
} as IUserContext;

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    isLogged: false
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}