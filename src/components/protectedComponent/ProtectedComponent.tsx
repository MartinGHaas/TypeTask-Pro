import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedComponentProps {
  showCase: boolean
  children: ReactNode
  path?: string
}

const ProtectedComponent = ({ children, showCase, path = '' }: ProtectedComponentProps) => {
  return showCase ? children : <Navigate to={`/${path}`} />
}

export default ProtectedComponent;