import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { auth } from '../config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loading/Loading';

/**
 * 
 * @param {{ children: any }} props 
 * @returns 
 */

export default function Authenticated({ children }) {
  const { userData } = useContext(AppContext);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  
  if (!loading && !user) {
    return <Navigate replace to="/login" state={{ from: location.pathname }} />
  }

  // if (userData.isBlocked === true) {
  //   return (
  //     <div>
  //         <h1 style={{ fontSize: '2em' }}>You can't see posts or leave comments because you are banned. Sorry not sorry. Hasta la vista, baby. </h1 >
  //         <div onClick={() => navigate('/')} role="button" className="btn m-1">Back</div>
  //     </div>
  // )
  // }

  return <>{userData ? children : <Loading />}</>;
}

Authenticated.propTypes = {
  children: PropTypes.any.isRequired,
  user: PropTypes.object,
};
