/*
-Crea un componente funzione Counter e crea una nuova variabile di stato chiamata counter inizializzata a 0. 
Il componente Counter dovrebbe renderizzare il valore di counter all'interno di un tag h2,
e il valore di counter dovrebbe essere incrementato di 1 ogni volta che l'utente clicca su un pulsante. 
Suggerimento: usa l'hook useState;
-Quando si chiama la funzione "setter" per incrementare il contatore, 
il parametro dovrebbe essere una funzione o un valore immediato? Perché? 
Quando lo stato dipende dal valore precedente (come in un incremento), è meglio usare la funzione, per evitare problemi con aggiornamenti asincroni o multipli.

-Modifica il componente Counter in modo che il valore iniziale del contatore e l'incremento siano passati come props al componente;
-Estrai il tag h2 che mostra la variabile di stato counter in un nuovo componente chiamato CounterDisplay 
e renderizzalo all'interno del componente Counter, passandogli la variabile di stato count come prop;
-Aggiungi un pulsante per decrementare e un pulsante per resettare al componente Counter. 
Il pulsante per decrementare dovrebbe decrementare il contatore della quantità passata come prop, 
e il pulsante per resettare dovrebbe riportare il contatore al valore iniziale passato come prop.
 */
import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

interface CounterProps {
  initialValue?: number;
  step?: number;
}

export function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  //effetto collaterale per stampare il valore del contatore ogni volta che cambia
  useEffect(() => {
    console.log("Valore corrente del contatore:", counter);
  }, [counter]);

  function handleIncrement() {
    setCounter((prev) => prev + step);
  }

  function handleDecrement() {
    setCounter((prev) => prev - step);
  }

  function handleReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment </button>
      <button onClick={handleDecrement}>Decrement </button>
      <button onClick={handleReset}>Reset </button>
    </div>
  );
}
