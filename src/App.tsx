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

function App() {
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
    <div>
      <div>
        <Hello />
        <Hello /> {/*esempio uso multiplo */}
        <Welcome name="Monika" />
        <Welcome name="ennio" age={20} />
        <Counter />
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
    </div>
  );
}
export default App;
/*
-Puoi utilizzare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?
Sì, puoi usarlo più volte. Ogni volta che usi <Hello />, React renderizza un'altra istanza di quel componente, quindi vedrai il contenuto duplicato nel DOM. 
-Puoi renderizzare il componente Message direttamente all'interno del componente App? Cosa succede se lo fai?
Sì, puoi farlo. Message è un componente come gli altri, quindi puoi usarlo ovunque, non solo all'interno di Hello.
es: import { Hello, Message } from "./Hello";

export function App() {
  return (
    <div>
      <Hello />
      <Message />
    </div>
  );
}*/
