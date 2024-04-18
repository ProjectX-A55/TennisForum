import { createContext } from "react";

/**
 * AppContext for the application.
 *
 * This context provides a user object and a userData object to all components in the application. 
 * It also provides a setContext function that can be used to update the context. The user object 
 * contains the user's authentication state and the userData object contains the user's data.
 *
 * @context
 * @property {Object|null} user - The user's authentication state.
 * @property {Object|null} userData - The user's data.
 * @property {function} setContext - A function to update the context.
 */
const AppContext = createContext({
    user: null,
    userData: null,
    setContext: () => { },
});


export default AppContext;