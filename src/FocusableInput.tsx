/*useRef

-Crea un componente FocusableInput che renderizza un tag input. 
Non appena il componente viene renderizzato, il tag input dovrebbe essere automaticamente messo a fuoco.
-Utilizzando StrictMode, crea un componente con un effetto che stampa un messaggio solo quando il componente è montato per la prima volta. 
Usa un ref per tenere traccia se il componente è montato o meno.
-Modifica il componente Counter in modo che ogni volta che il valore del contatore cambia, 
il valore di un ref venga aggiornato per contenere la direzione del cambiamento (cioè "up" o "down") rispetto alla prop initialValue. 
Stampa il valore del ref nella console solo quando è diverso dal valore precedente. */

import { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form.Group className="p-3">
      <Form.Label>Focusable Input</Form.Label>
      <Form.Control type="text" placeholder="Focusable input" ref={inputRef} />
    </Form.Group>
  );
}
export default FocusableInput;
