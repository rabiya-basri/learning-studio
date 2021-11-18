import React from 'react'
import { Route } from 'react-router'
import Home from './Home'
import RegisterForm from './Admin/RegisterForm'
import LoginForm from './Admin/LoginForm'

const Routing = (props) => {
    return (
        <div>
            <Route path='/' component={Home} exact={true} />
            <Route path='/admin/register' component={RegisterForm} exact={true} />
            <Route path='/admin/login' component={LoginForm} exact={true} />
            <Route path='/student/login' component={LoginForm} />
        </div>
    )
}
export default Routing