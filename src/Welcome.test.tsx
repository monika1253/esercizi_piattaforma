import { Welcome } from "./Welcome";
import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import "@testing-library/jest-dom";

describe("Welcome component", () => {
  it("renders the name correctly", () => {
    render(<Welcome name="Bob" />);
    expect(screen.getByText(/Welcome, Bob!/i)).toBeInTheDocument();
  });

  it("renders Age and Message when age is provided", () => {
    render(<Welcome name="Bob" age={30} />);

    //verifica che erà venga renderizzata correttamente
    expect(screen.getAllByText(/Your age is 30/i)[0]).toBeInTheDocument();

    //verifica che Message sia renderizzato
    expect(screen.getByText(/You are an adult!/i)).toBeInTheDocument();
  });

  it("does not render Age or Message when age is undefined", () => {
    render(<Welcome name="Bob" />);

    //età non dovrebbe essere presente
    expect(screen.queryByText(/Your age is/i)).toBeNull();

    //il messaggio non dovrebbe essere presente
    expect(screen.queryByText(/You are an adult!/i)).toBeNull();
  });
});
