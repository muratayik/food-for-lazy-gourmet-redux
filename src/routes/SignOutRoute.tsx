import { useNavigate } from "react-router-dom";
import useEffectOnce from "utils/useEffectOnce";

const SignOutRoute = () => {
  const navigate = useNavigate();

  useEffectOnce(() => {
    localStorage.removeItem("fflg_token");
    navigate("/");
  });

  return <div></div>;
};

export default SignOutRoute;
