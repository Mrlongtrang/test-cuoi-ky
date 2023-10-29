import { useEffect, useState } from 'react';

const mockUsers = [
  {
    username: 'name1@gmail.com',
    password: '123456',
  },
  {
    username: 'name2@hotmail.com',
    password: '12345678',
  },
];

export function useLogin() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem('user')));
    } catch {
      // do nothing
    }
  }, []);

  async function login(username, password) {
    // Mock login
    const userFromMock = mockUsers.find(
      user => user.username === username && user.password === password,
    );

    const user = { username: userFromMock?.username }; // other info here

    if (userFromMock) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    return undefined;
  }

  function isLoggedIn() {
    return user != undefined;
  }

  return { user, login, isLoggedIn };
}
