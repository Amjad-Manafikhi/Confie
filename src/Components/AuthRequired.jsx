import React from "react"
import { Outlet ,Navigate} from "react-router-dom"

export default function AuthRequired(){
    const authenticated = false;
    
    if (authenticated) return <Outlet />
    
    return <Navigate to="/login"/>
}