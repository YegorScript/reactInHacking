import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(15);

const MyPost = React.memo((props) => {
  console.log("render");
  let postsElement = props.profilePage.map((m) => (
    <Post message={m.message} id={m.id} like={m.like} key={m.id} />
  ));
  let addNewPost = (value) => {
    props.ADD_POST_ACTION_CREATE(value.newPostsText);
  };
  return (
    <div className={s.mp}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div>
        <div className={s.post}>{postsElement}</div>
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostsText"}
          validate={[required, maxLength10]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button> add post</button>
      </div>
    </form>
  );
};
const AddNewPostFormRedux = reduxForm({
  form: "addNewPost",
})(AddNewPostForm);
export default MyPost;
