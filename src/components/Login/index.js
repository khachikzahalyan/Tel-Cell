import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { useStore } from "../../store";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState({});

  const { setStore } = useStore();

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#56baed";
    return () => (document.body.style.backgroundColor = "#fff");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validLogin = process.env.REACT_APP_USER_KEY;
    const validPassword = process.env.REACT_APP_PASS_KEY;

    if (auth.login === validLogin && auth.password === validPassword) {
      setStore({ isAuthenticated: true });
      navigate("/secret-admin");
    } else {
      setError("Invalid username/password");
    }
  };

  const handleFieldChange = (e, field) => {
    error && setError(null);
    setAuth((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="/telcell.svg" id="icon" alt="User Icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleFieldChange(e, "login")}
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Login"
          />
          <input
            onChange={(e) => handleFieldChange(e, "password")}
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="Password"
          />
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            disabled={!auth.login || !auth.password}
          />
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
