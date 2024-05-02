import React from 'react'

const Login = props => {
    return (
        <div>
            <h2>Login</h2>
                <form id="login-form">
                    <input type="text" name="password" id="password-field" class="login-form-field" placeholder="Password" />
                    <input type="text" name="pin" id="pin-field" class="login-form-field" placeholder="PIN" />
                    <input type="checkbox" id="remember-me" name="remember-me" value="remember-me" />
                    <input type="submit" value="Login" id="login-form-submit" onclick="lsRememberMe(event)" />
                </form>
        </div>
    )
}

export default Login