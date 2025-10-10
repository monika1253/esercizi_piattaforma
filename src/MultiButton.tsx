import React, { BaseSyntheticEvent } from "react";

export function MultiButton() {
  const handleClick = (event: BaseSyntheticEvent) => {
    console.log("Clicked button name:", event.currentTarget.name);
  };
  return (
    <div>
      <button name="one" onClick={handleClick}>
        One
      </button>
      <button name="two" onClick={handleClick}>
        Two
      </button>
      <button name="three" onClick={handleClick}>
        Three
      </button>
    </div>
  );
}
