import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from "./Clock";

export function App() {
  return (
    <div>
      <Hello />
      <Hello /> {/*esempio uso multiplo */}
      <Welcome name="Monika" age={27} />
      <Welcome name="Anna" age={10} />
      <Welcome name="John" age={66} />
      <Welcome name="John" age={25} />
      <Welcome name="Alex" />
      <Counter initialValue={0} step={2} />
      <Clock />
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
