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

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>
        <div>
          <button onClick={handleLogin} disabled={isLoginDisabled}>
            Login
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
