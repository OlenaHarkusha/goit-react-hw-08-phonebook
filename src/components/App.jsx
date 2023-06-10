import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ContactsPage from './Pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './Hooks/Hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/AuthSlice/Operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatRoute';
import { Box, Skeleton, Stack } from '@chakra-ui/react';
import { selectIsLoading } from 'redux/Selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    )
  );
};
