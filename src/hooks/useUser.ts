import { authDataSelector, userDataSelector, hasUserLoggedSelector } from 'store/user/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'store';
import { login, signup, logout, getCurrentUser } from 'store/user/actions';

export const useUser = () => {
  const dispatch = useDispatch();

  return {
    isLogged: useSelector(hasUserLoggedSelector),
    tokens: useSelector(authDataSelector),
    userData: useSelector(userDataSelector),
    login: (data: Parameters<typeof login>[0]) => dispatch(login(data)),
    signup: (data: Parameters<typeof signup>[0]) => dispatch(signup(data)),
    logout: () => dispatch(logout()),
    getCurrentUser: () => dispatch(getCurrentUser()),
  };
};