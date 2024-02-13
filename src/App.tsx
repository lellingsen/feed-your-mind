import { Show, type Component, For } from "solid-js";

import styles from "./App.module.css";
import { AddDomainForm } from "./components/AddDomainForm";
import { domains } from "./domains-signal";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1>Hello from SolidJS!</h1>
      <p>This is a test</p>
      <AddDomainForm />
      <Show when={domains().length > 0} fallback={<></>}>
        <ul>
          <For each={domains()}>{(domain) => <li>{domain}</li>}</For>
        </ul>
      </Show>
    </div>
  );
};

export default App;
