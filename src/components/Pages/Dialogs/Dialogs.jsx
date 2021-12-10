import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, Form } from 'react-final-form';
// import { Redirect } from 'react-router-dom';
// import AddMessageContainer from './AddMessage/AddMessageContainer';

const Dialogs = (props) => {
  let dialogs = props.users
    .map((el, i) => <DialogItem name={el.name} id={el.id} key={i} />);
  let messages = props.messages
    .map((el, i) => <Message message={el.message} key={i} />);
  const onSubmit = (value) => {
    props.sendMessage(value.addNewMessage)
  }
  const validate = (values) => {
    console.log(values.addNewMessage)
    const errors = {};
    if (values.addNewMessage && values.addNewMessage.length < 3) {
      errors.addNewMessage = "3 ic qicha";
    }
    return errors;
  }
  // if (!props.isAuth) {
  //   return <Redirect to='/login' />
  // }
  return <div className={c.dialogs_content}>
    <div className={c.dialogs}>
      {dialogs}
    </div>
    <div className={c.messages}>
      {/* <AddMessageContainer /> */}
      <div>
        <div>
          {messages}
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {/* <Field component="textarea" placeholder="Enter message" name="addNewMessage" /> */}
                <Field
                  name="addNewMessage"
                  render={({ input, meta }) => (
                    <div>
                      <textarea
                        {...input}
                        className={(meta.touched && meta.error) ? c.error : ((meta.touched && !meta.error) ? c.valid : "")}
                        placeholder="New Message"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
                <button >AddMessage</button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  </div>
};

export default Dialogs;