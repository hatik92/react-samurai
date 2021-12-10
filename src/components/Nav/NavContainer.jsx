import { connect } from 'react-redux';
import Nav from './Nav'


const mapStateToProps = (state) => {
  return {
    nav_link: state.nav.nav_items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)



export default NavContainer;