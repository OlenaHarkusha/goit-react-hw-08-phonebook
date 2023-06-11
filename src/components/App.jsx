import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from './Hooks/Hooks';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/AuthSlice/Operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatRoute';

const HomePage = lazy(() => import('./Pages/HomePage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

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
