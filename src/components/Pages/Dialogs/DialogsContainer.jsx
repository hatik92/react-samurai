import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage } from '../../../Redux/dialogs-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    users: state.dialogs.users,
    newMessageText: state.dialogs.newMessageText,
    messages: state.dialogs.messages,
    // isAuth: state.auth.isAuth
  }
}


export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
// export default DialogsContainer;