import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import cart from "./cartSlice";
// import expandSidebar from "./ExpandSlice";
// import dialog from "./DialogSlice";
// const reducers = combineReducers({ cart, expandSidebar, dialog });
// const reducers = combineReducers({ cart });

// const config = {
//   key: "root",
//   storage,
// };

// const reducer = persistReducer(config, reducers);

// const store = configureStore({
//   reducer: reducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk],
// });

// export default store;

//________________________________redux docs
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
