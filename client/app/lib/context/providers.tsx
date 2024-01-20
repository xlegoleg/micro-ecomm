'use client'

import React, { useState } from "react"
import { UserContext } from "./user";

const ContextProviders: React.FC<any> = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        { children }
      </UserContext.Provider>
    </>
  )
}

export default ContextProviders;