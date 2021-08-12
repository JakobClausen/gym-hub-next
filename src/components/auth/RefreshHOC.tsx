import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { OpenPaths } from '../../types/auth';
import { setAccessToken, updateAccessToken } from '../../utils/authUtils';
import { Loading } from '../Loading';

interface RefreshHOCProps {}

export const RefreshHOC: React.FC<RefreshHOCProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const notAuthToast = () => toast.error('Not authenticated');

  useEffect(() => {
    updateAccessToken()
      .then(async (accessToken) => {
        setAccessToken(accessToken);
        if (router.pathname === OpenPaths.LOGIN) {
          const pushed = await router.push('/dashboard');
          if (pushed) {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      })
      .catch(async (err) => {
        if (
          router.pathname !== OpenPaths.LOGIN &&
          router.pathname !== OpenPaths.HOME
        ) {
          const pushed = await router.push('/login');
          if (pushed) {
            setLoading(false);
            notAuthToast();
          }
        } else {
          setLoading(false);
        }
      });
  }, []);

  if (loading) return <Loading />;
  return <>{children}</>;
};
