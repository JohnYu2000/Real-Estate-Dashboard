import React from 'react'
import './Signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Signin() {
    return (
        <div className="text-center">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Signin;