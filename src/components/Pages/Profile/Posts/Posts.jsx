import React from 'react';
// import Post from './OnePost/Post';
// import AddPost from './AddPost/AddPost';
import c from './Posts.module.css';
import AddPostContainer from './AddPost/AddPostContainer';


const Posts = (props) => {
  return <div className={c.posts}>
    my posts
      <AddPostContainer />
  </div>
};

export default Posts;