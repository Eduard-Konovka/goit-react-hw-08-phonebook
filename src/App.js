import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { authOperations, authSelectors } from 'redux/auth';
import AppBar from 'components/AppBar';
import GlobalSpinner from 'components/GlobalSpinner';
import Spinner from 'components/Spinner';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import 'App.css';

const HomeView = lazy(() =>
  import('pages/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import('pages/RegisterView.jsx' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('pages/LoginView.jsx' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('pages/ContactsView.jsx' /* webpackChunkName: "ContactsView" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <GlobalSpinner />
      ) : (
        <>
          <AppBar />

          <Suspense fallback={<Spinner size={200} />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}

      <ToastContainer autoClose={3000} />
    </>
  );
}
