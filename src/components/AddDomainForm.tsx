import type { Component } from "solid-js";

export const AddDomainForm: Component = () => {
  return (
    <form onSubmit={(evt: Event) => evt.preventDefault() }>
        <input type="text" />
        <button>Add</button>
    </form>
  );
};
