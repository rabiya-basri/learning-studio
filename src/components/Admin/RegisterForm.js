import React from "react";
import { Link,Route } from "react-router-dom";
import LoginForm from "./LoginForm";

const RegisterForm = (props) => {
    return (
        <div>
            <h2>Register</h2>
            <Link to='/admin/login'>Login</Link>
            <Route path='/admin/login' component={LoginForm} exact={ true}/>
        </div>
    )
}

export default RegisterForm