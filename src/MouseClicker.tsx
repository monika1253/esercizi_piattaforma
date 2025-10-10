/*Gestione degli eventi
-Crea un componente MouseClicker che contenga un pulsante con la prop name impostata alla stringa "one". 
Aggiungi un gestore di eventi al pulsante che stampa la prop name nella console quando cliccato, 
leggendo la proprietà event.target.name.
-Aggiungi un'immagine all'interno del pulsante e, 
senza creare un nuovo gestore di eventi o allegare un gestore di eventi all'immagine, 
stampa l'attributo name del pulsante indipendentemente dal fatto che si clicchi sul pulsante o sull'immagine.
-Aggiungi un gestore di eventi onClick all'immagine che stampa il src dell'immagine nella console. 
-L'attributo name del pulsante viene comunque stampato nella console quando si clicca sull'immagine? Perché?
Sì, l'attributo name del pulsante viene comunque stampato nella console quando si clicca sull'immagine, 
a meno che tu non blocchi la propagazione dell'evento.
Questo comportamento è dovuto al meccanismo di propagazione degli eventi in React, chiamato event bubbling.
Quando clicchi su un elemento (ad esempio un'immagine <img> dentro un <button>), l'evento:
Parte dall’elemento effettivamente cliccato (es. <img>) → chiamato event.target; 
Propaga verso l’alto agli elementi genitori: in questo caso, il bottone <button>.

-Come puoi impedire che l'attributo name del pulsante venga stampato nella console quando si clicca sull'immagine?
Nel gestore dell’immagine, ferma la propagazione. aggiungi event.stopPropagation() e il click non sale al bottone, quindi non verrà stampato il name. 

-Crea un componente MultiButton con tre pulsanti, ciascuno con la prop name impostata rispettivamente a "one", "two" e "three". 
Aggiungi lo stesso gestore di eventi a ciascun pulsante che stampa la prop name nella console quando cliccato, 
leggendo la proprietà event.target.name. */

import { BaseSyntheticEvent } from "react";

export function MouseClicker() {
  const handleButtonClick = (event: BaseSyntheticEvent) => {
    console.log("Button name:", event.currentTarget.name);
  };

  const handleImageClick = (event: BaseSyntheticEvent) => {
    event.stopPropagation();
    console.log("image:", event.currentTarget.src);
  };
  return (
    <button name="one" onClick={handleButtonClick}>
      <img
        src="https://commons.wikimedia.org/wiki/File:React-icon.svg"
        height={24}
        width={24}
        onClick={handleImageClick}
      />
      Click me!
    </button>
  );
}
