import React, { useEffect, useState } from "react";
import { setAccessToken, updateAccessToken } from "../../utils/accessToken";
import { useRouter } from "next/router";
import { OpenPaths } from "../../types/auth";

interface RefreshHOCProps {}

export const RefreshHOC: React.FC<RefreshHOCProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    updateAccessToken()
      .then(async (accessToken) => {
        setAccessToken(accessToken);
        if (router.pathname === OpenPaths.LOGIN) {
          const pushed = await router.push("/dashboard");
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
          const pushed = await router.push("/login");
          if (pushed) {
            setLoading(false);
          }
        }
        setLoading(false);
      });
  }, []);
  if (loading) return <div>loading...</div>;
  return <>{children}</>;
};
