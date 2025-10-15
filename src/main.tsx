import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

/*Styling dei Componenti

-Crea un file index.css e importalo all'interno del file main.tsx. 
Aggiungi una classe .welcome al componente Welcome che imposti il colore di sfondo e aggiunga un bordo.
-Modifica il componente Counter stilizzando la visualizzazione del contatore utilizzando un attributo style inline.
-Modifica il componente Login in modo che il colore di sfondo del button "login" sia 
"rosso" quando la lunghezza della password inserita è inferiore a 8 caratteri, verde altrimenti.
-Installa il pacchetto sass e utilizza SCSS per stilizzare il componente Clock.
-Installa il pacchetto tailwindcss e usalo per stilizzare il componente UncontrolledLogin.
-Installa il pacchetto react-bootstrap e usalo per stilizzare il componente FocusableInput. */
