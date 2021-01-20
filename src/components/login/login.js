import './login.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormsComtrol/FormsControl";
import {required} from "../../utils/validators/validators";
import React from "react";
import {connect} from "react-redux";
import { loginThunkCreator } from  "../redux/authReducer"
import { Redirect } from "react-router-dom"

const LoginForm = (props) => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    <div>
      <Field className="login-form" name="email" component={ Input } type="text" validate={[ required ]} />
    </div>
    <div>
      <Field className="login-form" name="password" component={ Input } type="password" validate={[ required ]}/>
    </div>
    <div>
      <Field className="login-form" name="rememberMe" component={ Input } type="checkbox" validate={[ required ]}/>
    </div>
    <button type="submit">Sing in</button>
  </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) return <Redirect to='/profile' />

  return <div className='container'>
    <div className='login'>
      <h3 className='login-title'>Please, sign in or sign up</h3>
    </div>
    <LoginReduxForm onSubmit={ onSubmit } />
  </div>
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { loginThunkCreator })(Login);