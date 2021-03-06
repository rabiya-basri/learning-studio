import React from 'react'
import { Route } from 'react-router'
import Home from './Home'
import RegisterForm from './Admin/RegisterForm'
import LoginForm from './Admin/LoginForm'
import Account from './Admin/Account'
import Login from './Student/Login'
import StudentContainer from './Student/StudentContainer'
import CourseContainer from './Courses/CourseContainer'

const Routing = (props) => {
    const {handelAuth}=props
    return (
        <>
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
            <Route path='/students' component={StudentContainer} exact={ true}/>
            {/* <Route path='/studentlogin' component={Login} exact={true} /> */}
            <Route path='/studentlogin'
                render={(props) => {
                    return (
                        <Login
                            {...props}
                            handelAuth={handelAuth}
                        />
                    )
                }}
            />
            <Route path='/admin/account' component={Account} exact={true} />
            <Route path='/courses' component={CourseContainer} exact={ true}/>
        </>
    )
}
export default Routing