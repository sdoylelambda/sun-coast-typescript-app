import React from 'react'

const ForgotPassword = props => {
    return (
        <div>
            <h2>Forgot Password</h2>
                <form id="forgot-password-form-field">
                <input type="text" name="forgot-email-form-field" id="forgot-email-form-field" class="forgot-password-form-field" placeholder="Email" />
                <input type="pin" name="pin" id="forgot-pin-field" class="forgot-password-form-field" placeholder="PIN" />
                <input type="submit" value="Login" id="forgot-password-form-submit" onclick="forgotPassord(event)" />
                </form>
        </div>
    )
}

export default ForgotPassword