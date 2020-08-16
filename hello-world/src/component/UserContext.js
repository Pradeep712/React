import React from 'react';

// const UserContext = React.createContext()
const UserContext = React.createContext('CodeEvolution')//Sets default value for context

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext