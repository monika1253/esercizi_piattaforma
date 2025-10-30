import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
import FocusableInput from "./FocusableInput";
import FirstModeEffect from "./FirstModeEffect";
import Counter2 from "./Counter2";
import Colors from "./Colors";
import TodoList from "./TodoList";
import GithubUsers from "./GithubUsers";
import ShowGithubUser from "./ShowGithubUser";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

export default function App() {
  const handleLogin = (data: {
    username: string;
    password: string;
    remember: boolean;
  }) => {
    console.log("Login data", data);
    alert(`Logged in as ${data.username} (remember: ${data.remember})`);
  };

  const colorList = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "blue" },
  ];

  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/counter" style={{ marginRight: "1rem" }}>
          Counter
        </Link>
        <Link to="/users">Github Users</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <Hello />
                <Hello /> {/* esempio uso multiplo */}
                <Welcome name="Monika" />
                <Welcome name="Ennio" age={20} />
                <div style={{ color: "blue", fontSize: "2rem" }}>
                  <Counter />
                </div>
                <Clock />
                <h1>
                  Gestione degli eventi
                  <MouseClicker />
                  <MultiButton />
                </h1>
                <h2>
                  Uncontrolled Login
                  <UncontrolledLogin />
                </h2>
              </div>
              <div>
                <h1>Interactive Welcome</h1>
                <InteractiveWelcome />
                <h1>Login Form</h1>
                <Login onLogin={handleLogin} />
              </div>
              <div>
                <h1>useRef Examples</h1>
                <FocusableInput />
                <FirstModeEffect />
                <Counter2 initialValue={0} />
              </div>
              <div>
                <h1>Lista Colori</h1>
                <Colors items={colorList} />
              </div>
              <div>
                <h1>La mia App todo</h1>
                <TodoList />
              </div>
            </div>
          }
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Outlet />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path="" element={<GithubUsers />} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
