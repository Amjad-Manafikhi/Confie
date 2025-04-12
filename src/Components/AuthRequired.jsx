import React from "react"
import { Outlet ,Navigate} from "react-router-dom"

export default function AuthRequired(){
    const authenticated = true;
    
    if (authenticated) return <Outlet />
    
    return <Navigate 
                to="/login"
                replace
                state={{message:location.pathname}}

            />
}