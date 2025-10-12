/*Liste e Stato

-Crea un componente TodoList che renderizza un tag ul con un tag li per ogni elemento contenuto nella variabile di stato items. 
La variabile di stato items dovrebbe essere un array di stringhe. 
Il componente TodoList dovrebbe anche contenere un tag input e un button. 
Quando il button viene cliccato, l'event handler dovrebbe aggiungere il valore del tag input all'array items.
-Modifica il componente TodoList in modo che l'input venga svuotato ogni volta che un Todo viene aggiunto all'array items.
-Modifica il componente TodoList aggiungendo un button "reset" che svuota l'array items quando cliccato.
-Modifica il componente TodoList aggiungendo un button "remove" a ogni tag li. 
Quando cliccato, l'event handler dovrebbe rimuovere l'elemento corrispondente dall'array items. */

import { useState, ChangeEvent } from "react";

function TodoList() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue(""); //svuota input
    }
  };

  const handleReset = () => {
    setItems([]);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="aggiungi un todo"
      />
      <button onClick={handleAddItem}>Aggiungi</button>
      <button onClick={handleReset}>Reset</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
