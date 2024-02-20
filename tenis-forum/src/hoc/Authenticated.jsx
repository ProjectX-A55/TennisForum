import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

/**
 * 
 * @param {{ children: any }} props 
 * @returns 
 */

export default function Authenticated({ children }) {
  const { user } = useContext(AppContext);
  const { userData, setContext } = useContext(AppContext)
  const navigate = useNavigate();
  const location = useLocation();
  
  if (!user) {
    return <Navigate replace to="/login" state={{ from: location }} />
  }

  // if (userData.isBlocked === true) {
  //   return (
  //     <div>
  //         <h1 style={{ fontSize: '2em' }}>You can't see posts or leave comments because you are banned. Sorry not sorry. Hasta la vista, baby. </h1 >
  //         <div onClick={() => navigate('/')} role="button" className="btn m-1">Back</div>
  //     </div>
  // )
  // }

  return (
    <>
      {children}
    </>
  )
}

Authenticated.propTypes = {
  children: PropTypes.any.isRequired,
  user: PropTypes.object,
};
