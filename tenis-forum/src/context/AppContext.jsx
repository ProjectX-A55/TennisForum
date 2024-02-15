import { createContext } from "react";

const AppContext = createContext({
    user: null,
    userData: null,
    avatar: null,
    setContext: () => { },
});


export default AppContext;