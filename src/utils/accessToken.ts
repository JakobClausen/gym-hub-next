let accessToken = "";

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const updateAccessToken = async () => {
  const res = await fetch(`http://localhost:4000/refresh_token`, {
    method: "POST",
    credentials: "include",
  });
  const data = await res.json();
  if (!data.ok) {
    throw new Error();
  }
  return data.accessToken;
};
