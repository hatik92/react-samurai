import React from 'react';
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router';
import c from './Login.module.css'

// const validate = (val) => {
//     let errors = {};
//     if (val.bio && val.bio.trim().length < 5) {
//         errors.bio = "5 inc qicha"
//     }
//     return errors
// }
const Login = (props) => {
    console.log(props);
    const onSubmit = (formData) => {
        // console.log(formData);
        props.data.loginData(formData)
    };
    if (props.data.isAuth) {
        return <Redirect to="/profile" />
    }
    return <>
        <div className={c.login_page}>
            <div className={c.form}>
                <Form
                    onSubmit={onSubmit}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        }
                        if (!values.password) {
                            errors.password = "Required";
                        }
                        return errors;
                    }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className={c.login_form}>
                            {/* <Field component="input" name="email" type="text" placeholder="email" /> */}
                            <Field
                                name="email"
                                render={({ input, meta }) => (
                                    <div>
                                        <input
                                            {...input}
                                            className={(meta.touched && meta.error) ? c.error : ((meta.touched && !meta.error) ? c.valid : "")}
                                            placeholder="Enter email"
                                        />
                                        {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
                                    </div>
                                )}
                            />
                            <Field
                                name="password"
                                type="password"
                                render={({ input, meta }) => (
                                    <div>
                                        <input
                                            {...input}
                                            className={(meta.touched && meta.error) ? c.error : ((meta.touched && !meta.error) ? c.valid : "")}
                                            placeholder="Enter password"
                                        />
                                        {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
                                    </div>
                                )}
                            />
                            {/* <Field component="input" name="password" type="password" placeholder="password" /> */}
                            <label>
                                <Field
                                    component="input"
                                    type="checkbox"
                                    name="rememberMe"
                                />
                                Remembrt Me
                            </label>
                            {props.data.errorMessage.length > 0 && <div className={c.errorMessage}>{props.data.errorMessage}</div>}
                            <button>login</button>
                        </form>
                    )}
                />
            </div>
        </div>
    </>
}
export default Login