import { useState, useCallback, useMemo } from "react";
import useAxios from "../../sandbox/hooks/customHooks/useAxios";
import { login, signup } from "../../forms/utils/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../../forms/utils/localStorageService";
import { useDataProvider as useUser }  from "../../forms/hooks/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES  from "../../routs/routsPage";
import normalizeUser from "../../users/forms/normallization/normalizeUser";



const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.ROOT);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

    const handleSignup = useCallback(
      async (userFromClient) => {
        try {
          const normalizedUser = normalizeUser(userFromClient);
          await signup(normalizedUser);
          await handleLogin({
            email: userFromClient.email,
            password: userFromClient.password,
          });
        } catch (error) {
          requestStatus(false, error, null);
        }
      },
      [requestStatus, handleLogin]
    );

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useUsers;
