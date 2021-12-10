import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { authUser, logout } from '../../Redux/auth-reducer';
import { getAuthInfo, getLogo } from '../../selecters/header-selecters';
import Headers from './Headers';


const HeadersContainer = (props) => {
  

  return <Headers {...props} />
}

const mapStateToProps = (state) => {
  return {
    logo: getLogo(state),
    authInfo: getAuthInfo(state)
  }
}

export default connect(mapStateToProps, { authUser, logout })(HeadersContainer)
