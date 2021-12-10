import './App.css';
import HeadersContainer from './components/Header/HeadersContainer';
import NavContainer     from './components/Nav/NavContainer';
import ProfileContainer from './components/Pages/Profile/ProfileContainer';
import DialogsContainer from './components/Pages/Dialogs/DialogsContainer';
import News             from './components/Pages/News/News';
import Music            from './components/Pages/Music/Music';
import Settings         from './components/Pages/Settings/Settings';
import UsersContainer   from './components/Pages/Users/UsersContainer';
import { initializedApp } from './Redux/app-reducer';
import { Route }        from 'react-router-dom';
import LoginContainer from './components/Pages/Login/LoginContainer';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Loader from './components/common/loader/loader';

const App = (props) => {
  useEffect(() => {
    props.initializedApp()
  }, [])
  // console.log(props);

  if(!props.initialized) {
    return <Loader />
  }
  return (
      <div className="app-wrapper">
        <HeadersContainer />
        <NavContainer />
        <div className="main-content">
        {/* <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path='/messages' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginContainer />} />
        </Routes> */}
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/messages' render={() =><DialogsContainer />}/>
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps, {initializedApp})
)(App);
