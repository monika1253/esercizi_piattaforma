import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  return (
    <div>
      <Hello />
      <Hello /> {/*esempio uso multiplo */}
      <Welcome name="Monika" />
      <Counter initialValue={0} step={2} />
      <Clock />
      <h1>
        {" "}
        Gestione degli eventi
        <MouseClicker />
        <MultiButton />
      </h1>
      <h2>
        Uncontrolled Login
        <UncontrolledLogin />
      </h2>
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
