import PropTypes from 'prop-types';
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Navigate} from 'react-router-dom';

/**
 * 
 * @param {{ children: any }} props 
 * @returns 
 */
export default function AdminRoute({ children }) {
    const { userData } = useContext(AppContext);

    if (userData?.isAdmin) {
        return children;
    }

    return <Navigate to="/" />;
}

AdminRoute.propTypes = {
    children: PropTypes.any.isRequired,
    userData: PropTypes.object,
};   