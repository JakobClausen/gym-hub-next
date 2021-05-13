import { LoginForm } from "../components/LoginForm";
import { useLoginMutation, Login } from "../generated/graphql";
import { setAccessToken } from "../utils/accessToken";

interface SigninProps {}
const Signin: React.FC<SigninProps> = ({}) => {
  const [login, { error }] = useLoginMutation();

  const handleLogin = async (cridentials: Login) => {
    const response = await login({ variables: cridentials });
    if (response && response.data) {
      setAccessToken(response.data.loginUser.accessToken);
      return;
    }
  };

  return (
    <div>
      <p>Login</p>
      <LoginForm onSubmit={handleLogin} />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Signin;
