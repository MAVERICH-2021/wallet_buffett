import { useState } from 'react';

interface User {
  id: string;
  username: string;
}

const useLocalStorageUser = (key: string) => {
  const [storedUser, setStoredUser] = useState<User | null>(() => {
    try {
      const userString = localStorage.getItem(key);
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error('Error reading from LocalStorage', error);
      return null;
    }
  });

  const setUser = (user: User | null) => {
    try {
      const userString = JSON.stringify(user);
      localStorage.setItem(key, userString);
      setStoredUser(user);
    } catch (error) {
      console.error('Error writing to LocalStorage', error);
    }
  };

  return [storedUser, setUser] as const;
};

export default useLocalStorageUser;