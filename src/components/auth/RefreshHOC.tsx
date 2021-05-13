import React, { useEffect, useState } from "react";
import { setAccessToken, updateAccessToken } from "../../utils/accessToken";

interface RefreshHOCProps {}

export const RefreshHOC: React.FC<RefreshHOCProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    updateAccessToken().then((accessToken) => {
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);
  if (loading) return <div>loading...</div>;
  return <>{children}</>;
};
