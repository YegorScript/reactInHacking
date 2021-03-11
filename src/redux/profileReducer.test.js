import profileReducer, { ADD_POST_ACTION_CREATE } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "It`s my first project", like: 48 },
    { id: 3, message: "OH.My Hacker?", like: 12 },
  ],
};

test("length of posts should be incremented", () => {
  let action = ADD_POST_ACTION_CREATE("aloha,bro");

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

test("message of new post should be correct", () => {
  let action = ADD_POST_ACTION_CREATE("aloha,bro");

  let newState = profileReducer(state, action);
  expect(newState.posts[3].message).toBe("aloha,bro");
});

test("after deleting length of messages should be decrement", () => {
  let action = ADD_POST_ACTION_CREATE("aloha,bro");

  let newState = profileReducer(state, action);
  expect(newState.posts[3].message).toBe("aloha,bro");
});
