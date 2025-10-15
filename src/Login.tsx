import { useState } from "react";
import "./Login.css";

type LoginProps = {
  onLogin: (data: {
    username: string;
    password: string;
    remember: boolean;
  }) => void;
};

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  const handleLogin = () => {
    onLogin({ username, password, remember });
  };

  const isLoginDisabled = username.trim() === "" || password.trim() === "";

  const dynamicLoginBtnClass =
    password.length >= 8 ? "login-btn valid" : "login-btn invalid";

  return (
    <div className="login-container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>
        <div className="form-buttons">
          <button
            onClick={handleLogin}
            disabled={isLoginDisabled}
            className={`btn login-btn ${
              password.length >= 8 ? "valid" : "invalid"
            }`}
          >
            Login
          </button>
          <button onClick={handleReset} className="btn reset-btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
