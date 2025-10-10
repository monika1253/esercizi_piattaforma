/*Form controllati

-Crea un componente InteractiveWelcome che renderizza un tag input e il componente Welcome. 
Passa il contenuto corrente del tag input alla prop name del componente Welcome. 
Il tag input dovrebbe essere un componente controllato.
-Crea un componente Login contenente tre input: un input per username, un input per la password e una checkbox per remember. 
Tutti e tre gli input dovrebbero essere componenti controllati.
-Aggiungi un pulsante "login" al componente Login. 
Questo pulsante dovrebbe essere disabilitato finché gli input username e password sono vuoti. 
Quando cliccato, il gestore di eventi allegato al pulsante dovrebbe chiamare una funzione onLogin passata come prop al componente Login, passando lo stato.
-Aggiungi un pulsante "reset" al componente Login che cancella il contenuto di tutti e tre gli input quando cliccato.
 */

import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Welcome name={name} />
    </div>
  );
}
