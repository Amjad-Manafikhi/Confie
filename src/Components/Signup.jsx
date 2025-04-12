import React  from "react"
import {useLocation ,Link , useNavigate} from "react-router-dom"

export default function Signup(){
    const location =useLocation();
    const [showPassword ,setShowPassword]=React.useState(false);
    const navigate=useNavigate();
    function togglePassword(){
        setShowPassword(prev => !prev);
    }
    function goBack(e){
        e.preventDefault();
        navigate(location.state.from,{replace:true});    } 
    const style={
        position: "relative",
        left:"86%",
        bottom:"18%",
        cursor: "pointer"
      } 
    
    return(
            <div>
                <Link
                    to={location.state.from}
                    replace
                >go back</Link>
                <div className="login-card">

                    <h1> Sign Up</h1>
                    <form  className="login-form"name="sign" action="">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="amjadmanafikhi@gmail.com"></input>
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}  
                            id="password"
                            
                        >
                            
                        </input>
                        <span onClick={togglePassword} style={style}>
                        {showPassword ? "🙈" : "👁‍🗨"}                        </span>
                        <button onClick={goBack} className="submit-button" type="submit">submit</button>
                    </form>
                </div>

            </div>
    )
}