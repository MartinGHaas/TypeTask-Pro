import { ReactNode, useEffect, useState } from "react";
import useCookiesTokenValidation from "./useCookiesTokenValidation";

interface TestJwtType {
  children: ReactNode,
}

/**
 * This component checks if there is a user in
 * the cookies, and if true dispatches this user to
 * React Redux.
 * 
 * @param children 
 * @returns null(while is loading) and the children if its already loaded
 */
const RequireAuthToken = ({ children }: TestJwtType) => {

  const tokenValidation = useCookiesTokenValidation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      tokenValidation.dispatchAuthenticatedUser();
      setLoading(false);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [tokenValidation]);

  // TODO: add loading screen
  if (loading) return null;

  return (
    <>
      {children}
    </>
  );
}

export default RequireAuthToken;