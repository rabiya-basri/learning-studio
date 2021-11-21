import React from 'react'
import { Route } from 'react-router'
import Home from './Home'
import RegisterForm from './Admin/RegisterForm'
import LoginForm from './Admin/LoginForm'
import Account from './Admin/Account'
import Register from './Student/Register'
import Login from './Student/Login'

const Routing = (props) => {
    const {handelAuth}=props
    return (
        <div>
            <Route path='/' component={Home} exact={true} />
            <Route path='/admin/register' component={RegisterForm} exact={true} />
            <Route path='/admin/login'
                render={(props) => {
                    return (
                        <LoginForm
                            {...props}
                            handelAuth={handelAuth}
                        />
                    )
                }}
            />
            <Route path='/studentregister' component={Register} exact={ true}/>
            <Route path='/studentlogin' component={Login} exact={ true}/>
            <Route path='/admin/account' component={Account} exact={ true}/>
        </div>
    )
}
export default Routing