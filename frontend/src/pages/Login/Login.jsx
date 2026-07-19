import { useState } from "react";
import { loginWithGoogle } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "@/styles/Login.css";

export default function Login() {

    const navigate = useNavigate();

    const [loading,setLoading]=useState(false);

    const handleGoogleLogin=async()=>{

        try{

            setLoading(true);

            await loginWithGoogle();

            navigate("/dashboard");

        }

        catch(err){

            console.error("FULL ERROR:", err);
        
            console.error("Firebase Code:", err.code);
        
            console.error("Firebase Message:", err.message);
        
            alert(err.message);
        
        }

        finally{

            setLoading(false);

        }

    }

    return(

<div className="login-container">

<div className="login-card">

<h1>

IndustrialMind AI

</h1>

<p>

Predictive Maintenance using Artificial Intelligence

</p>

<button

onClick={handleGoogleLogin}

disabled={loading}

className="google-btn"

>

<FcGoogle size={25}/>

{

loading?

"Signing In..."

:

"Continue with Google"

}

</button>

</div>

</div>

);

}