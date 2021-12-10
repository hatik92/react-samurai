import React from 'react';
import { Field, Form } from 'react-final-form';
// import { addPostActionCreator, updateNewPostActionCreator } from '../../../../../Redux/profile-reducer';
// import c from './AddPost.module.css';
import Post from '../OnePost/Post';



const AddPost = (props) => {
  const onSubmit = (value) => {
    props.addPost(value.addNewPost)
  }
  let posts = props.posts
    .map((el, i) => <Post message={el.post} key={i} />);
  return <div>
    <div>
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field component="textarea" name="addNewPost" />
              <button>Add post</button>
            </form>
          )}
        />
      </div>
    </div>
    <div>
      {posts}
    </div>

  </div>


};

export default AddPost;