import React, { useEffect, useState } from "react";
import { setAccessToken, updateAccessToken } from "../../utils/accessToken";
import Loader from "react-loader-spinner";
import { useRouter } from "next/router";
import { OpenPaths } from "../../types/auth";
import { PrimaryContainer } from "../../styles/styledComponents/containers";
import { Center } from "../../styles/styledComponents/align";

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

  if (loading)
    return (
      <PrimaryContainer>
        <Center>
          <Loader type="TailSpin" color="#FFFFFF" height={50} width={50} />
        </Center>
      </PrimaryContainer>
    );
  return <>{children}</>;
};
