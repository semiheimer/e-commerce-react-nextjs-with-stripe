import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/ui/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useRouter } from 'next/router';
const noAuthRequired = ['/', '/login', '/product/[id]', '/chechout'];
import React from 'react';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </Layout>
    </Provider>
  );
}

export default MyApp;
