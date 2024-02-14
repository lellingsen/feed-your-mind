import type { Component } from "solid-js";
import { domains, setDomains } from "../domains-signal";

export const AddDomainForm: Component = () => {
  let domainInput: HTMLInputElement | undefined;
  const addDomainClicked = (): void => {
    if (domainInput) {
      setDomains([...domains(), domainInput?.value]);
      domainInput.value = "";
    }
  };

  return (
    <form onSubmit={(evt: Event) => evt.preventDefault()}>
      <label>Add a domain:</label>
      <input type="text" ref={domainInput} />
      <button onClick={addDomainClicked}>Add</button>
    </form>
  );
};
