interface UserIdentity {
  username: string;
}

interface StatusCode {
  status: number;
}

const authProvider = {
  // called when the user attempts to log in
  login: ({ username }: UserIdentity) => {
      localStorage.setItem('@ADMIN:username', JSON.stringify(username));
      // accept all username/password combinations
      return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
      localStorage.removeItem('@ADMIN:username');
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: StatusCode) => {
      if (status === 401 || status === 403) {
          localStorage.removeItem('@ADMIN:username');
          return Promise.reject();
      }
      return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
      return localStorage.getItem('@ADMIN:username')
          ? Promise.resolve()
          : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;