import { createSignal } from "solid-js";

export const [domains, setDomains] = createSignal<string[]>([]);
