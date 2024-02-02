//create  a custom hook to check user is loogged in or not
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {User} from '../redux/types';

export const useUserLogin = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const user = useSelector((state: RootState) => state.userReducer.user);

  useEffect(() => {
    if (user) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [user]);

  return isUserLoggedIn;
};