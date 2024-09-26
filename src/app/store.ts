import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice';
import { usersSlice } from '../features/users/users';
import { authorSlice } from '../features/author/author';
import { selectedPostSlice } from '../features/selectedPost/selectedPost';
import { postsSlice } from '../features/posts/posts';
import { commentsSlice } from '../features/comments/comments';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice.reducer,
    author: authorSlice.reducer,
    posts: postsSlice.reducer,
    selectedPost: selectedPostSlice.reducer,
    comments: commentsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */