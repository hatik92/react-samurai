import React from 'react'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage, updateNewMessage } from '../../../Redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';


class DialogsComponent extends React.Component {
  componentDidMount() {
    // debugger
    // if (!this.props.isAuth) {
    //   <Redirect to='/login' />
    // }
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to='/login' />
    }
    return <Dialogs users={this.props.users}
                    messages={this.props.messages}
                    sendMessage={this.props.sendMessage}
                    updateNewMessage={this.props.updateNewMessage}
                    newMessageText={this.props.newMessageText}
    />
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.dialogs.users,
    newMessageText: state.dialogs.newMessageText,
    messages: state.dialogs.messages,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessage())
    },
    updateNewMessage: (text) => {
      dispatch(updateNewMessage(text))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsComponent)
export default DialogsContainer;