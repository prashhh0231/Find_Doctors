import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Info from './Info';
import './login.css';



function Login() {
    const clientId = "59388875197-t80kl66mlceg8v2o0fd6bgl210itpq8n.apps.googleusercontent.com";
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className="login">
           <center>
               
            <div className="loginDiv">
            { showloginButton ?
                <>
                {/* <h2>Sign in With Google</h2>/ */}
                <GoogleLogin
                    // icon={false}
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    className="logbtn"
                > <h2>Sign up with google.... </h2></GoogleLogin>
                </>: null}
            </div>
           </center>

            <div className="logoutDiv">
            { showlogoutButton ?
                <>

                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                    className="logoutbtn"
                >
                    Sign out
                </GoogleLogout><br/><Info val={true}/>
                
                </> : null
            }
            </div>
            
        </div>
    );
}
export default Login;