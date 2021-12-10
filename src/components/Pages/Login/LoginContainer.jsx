import React from 'react';
import { connect } from 'react-redux';
import { loginData } from '../../../Redux/auth-reducer';
import { getErrorMessage, getIsAuth } from '../../../selecters/login-selecters';
import Login from './Login';

const LoginContainer = (props) => {
    return <>
        <Login data={props} />
    </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        errorMessage: getErrorMessage(state)
    }
}

export default connect(mapStateToProps, {loginData})(LoginContainer)