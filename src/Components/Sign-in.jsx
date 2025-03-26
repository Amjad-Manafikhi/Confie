import React  from "react"
import {useLocation} from "react-router-dom"

export default function Sign(){
    const location =useLocation().pathname;
    return(
            <div>
                <h1>{location=== "/signup" ? "Sign Up" : "Log In"}</h1>
                

            </div>
    )
}