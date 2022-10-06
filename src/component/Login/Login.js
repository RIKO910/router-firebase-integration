import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signinWithGoogle,handleSignout} =useFirebase();
    return (
        
        <div>
            <h2>Please login</h2>
            <div style={{margin:'20px'}}>
                <button onClick={signinWithGoogle}>Google Sign In</button>
            </div>
            <form>
            <input type="email" name="" id="" placeholder='input your email' />
            <br />
            <input type="password" name="" id="" placeholder='input your password' />
            <br />
            <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;