import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push('/');
  }, [router, user]);
  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
