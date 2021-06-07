import React from 'react'


const UserContext = React.createContext();

const UProvider  = UserContext.Provider
const UConsumer  = UserContext.Consumer

export { UProvider, UConsumer }
