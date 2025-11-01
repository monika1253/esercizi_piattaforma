import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

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

/*Styling dei Componenti

-Crea un file index.css e importalo all'interno del file main.tsx. 
Aggiungi una classe .welcome al componente Welcome che imposti il colore di sfondo e aggiunga un bordo.
-Modifica il componente Counter stilizzando la visualizzazione del contatore utilizzando un attributo style inline.
-Modifica il componente Login in modo che il colore di sfondo del button "login" sia 
"rosso" quando la lunghezza della password inserita è inferiore a 8 caratteri, verde altrimenti.
-Installa il pacchetto sass e utilizza SCSS per stilizzare il componente Clock.
-Installa il pacchetto tailwindcss e usalo per stilizzare il componente UncontrolledLogin.
-Installa il pacchetto react-bootstrap e usalo per stilizzare il componente FocusableInput. */

/*Router

-Crea un nuovo branch partendo dal primo esercizio sui props. 
Modifica il componente App affinché avvolga un componente Routes e aggiungi una singola Route per il percorso /, 
che renderizza il componente Welcome, passandogli una prop name.
-Renderizza il componente App all'interno di un componente BrowserRouter.
-Aggiungi una nuova Route per il percorso /counter che renderizza il componente Counter del primo esercizio sullo stato.
-Aggiungi una nuova Route per il percorso /users/:username, che renderizza un componente ShowGithubUser, 
il quale riceve il parametro username dal percorso e renderizza un componente GithubUser, passandogli lo username ricevuto.
-Aggiungi tre Link all'interno del componente principale App e utilizzali per navigare tra i tre percorsi. 
Aggiungi una route di "Not Found" che viene renderizzata quando un utente naviga verso un percorso inesistente.
-Crea un componente GithubUserList che recupera i dati dall'API all'URL https://api.github.com/users 
e mostra un elenco di link con i nomi utente di GitHub. 
Cliccando su un nome utente, verrà visualizzato il componente ShowGithubUser.
-Aggiungi una Route per il percorso /users che mostra il componente GithubUserList. 
Se esiste una Route per /users/:username, rimuovila dal componente App 
e aggiungi una nuova route annidata all'interno della route /users.
-Aggiungi una route di indice alla route GithubUsers, che mostra il messaggio "Aggiungi un utente e selezionalo".
 */

/*Scrivi un test per il componente Welcome dell'esercizio props */
