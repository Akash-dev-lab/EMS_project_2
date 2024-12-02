import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
const { auth } = useContext(AuthContext);

return auth.isAuthenticated && auth.userType === 'admin' ? (
  children
) : (
  <Navigate to="/" />
);
}

export default AdminRoute;