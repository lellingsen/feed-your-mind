import type { Component } from "solid-js";

import styles from "./App.module.css";
import { AddDomainForm } from "./components/AddDomainForm";

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1>Hello from SolidJS!</h1>
      <p>This is a test</p>
      <AddDomainForm />
    </div>
  );
};
