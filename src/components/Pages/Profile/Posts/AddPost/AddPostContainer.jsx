// import React from 'react';
import { addPost } from '../../../../../Redux/profile-reducer';
import AddPost from './AddPost';
import { connect } from 'react-redux';
import { getNewPostText, getPosts } from '../../../../../selecters/addPost-selecters';


const mapSrateToProps = (state) => {
  return {
    newPostText: getNewPostText(state),
    posts: getPosts(state)
  }
}

const AddPostContainer = connect (mapSrateToProps, {addPost})(AddPost)

export default AddPostContainer;