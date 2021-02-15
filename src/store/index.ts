import { useDispatch as useActionDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './modules/reducers';
import { UserState } from './modules/user/state';

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type Dispatch = typeof store.dispatch;
export const useDispatch = () => useActionDispatch<Dispatch>();

export interface State {
  user: UserState;
}