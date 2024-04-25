import PropTypes from 'prop-types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import AppContext from '../context/AppContext';

/**
 * Authenticated component for the application.
 *
 * This component checks if the user is authenticated and not blocked. If the user is not authenticated, 
 * it redirects them to the login page. If the user is blocked, it displays a message informing them that 
 * they are blocked and a button to navigate back to the home page. If the user is authenticated and not blocked, 
 * it renders the children components.
 *
 * @component
 * @param {{children: JSX.Element}} props - The children components to render if the user is authenticated and not blocked.
 * @returns {JSX.Element} - A JSX element representing the authenticated component.
 */
export default function Authenticated({ children }) {
  const [userData] = useState(AppContext)
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  
  if (!loading && !user) {
    return <Navigate replace to="/login" state={{ from: location.pathname }} />
  }
  //TODO: 1. TRQBVA DA SLOJA TOAST VMESTO ALERTS !!!!!!!!!!!!!!!!!!!!
  //TODO: 2. Trqbva da napravq komponent za bloknaite users che desi se e prestarala s toq red tuka
  
  if (userData.isBlocked === true) {
    return (
      <div>
          <h1 style={{ fontSize: '2em' }}>{`You can't see posts or leave comments because you are banned. Sorry not sorry. Hasta la vista, baby.`} </h1 >
          <div onClick={() => navigate('/')} role="button" className="btn m-1">Back</div>
      </div>
  )
  }

  return <>{ children }</>;
}

Authenticated.propTypes = {
  children: PropTypes.any.isRequired,
  user: PropTypes.object,
};
