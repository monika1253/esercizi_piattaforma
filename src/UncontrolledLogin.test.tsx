import "@testing-library/jest-dom";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { describe, afterAll, test, beforeEach, expect } from "vitest";
import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

/*test: che il form si comporti correttamente quando l'utente interagisce con esso: 
-puo scrivere nei campi username e password
-al click del login, il form viene inviato (chiamato onSubmit)
che i dati inseriti vengano raccolti e gestiti correttamente nel submit handler:
-handleFormSubmit usa FormData su event.currentTarget per leggere i valori
-i valori inseriti vengono stampati con console.log*/

//mock di console.log per poterlo verificare
const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("UncontrolledLogin", () => {
  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  test("renderizza il form con campi username e password", () => {
    render(<UncontrolledLogin />);

    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("fa il log di username e password al submit", () => {
    render(<UncontrolledLogin />);

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    //simula input utente
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "secret123" } });

    //simula il submit
    fireEvent.click(submitButton);

    //verifica che console.log sia stato chiamato con i valori giusti
    expect(consoleLogSpy).toHaveBeenCalledWith("Username", "testuser");
    expect(consoleLogSpy).toHaveBeenCalledWith("Password", "secret123");
  });
});
