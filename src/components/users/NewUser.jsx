import React from 'react'

const NewUser = props => {
    return (
        <div>
    <h2>New User</h2>
    <form id="new-user-form-field">
      <input type="text" name="full-name-field" id="full-name-field" class="new-user-form-field" placeholder="Full Name" />
      <input type="text" name="email-field" id="email-field" class="new-user-form-field" placeholder="Email" />
      <input type="password" name="password" id="new-user-password-field" class="new-user-form-field" placeholder="Password" />
      <input type="pin" name="pin" id="new-pin-field" class="new-user-form-field" placeholder="PIN" />
      <input type="submit" value="Login" id="new-user-form-submit" onclick="newUser(event)" />
    </form>
        </div>
    )
}

export default NewUser