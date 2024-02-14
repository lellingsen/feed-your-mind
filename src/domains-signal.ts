import { createEffect, createSignal } from "solid-js";

export const [domains, setDomains] = createSignal<string[]>([]);
export const [feeds, setFeeds] = createSignal<any[]>([]);

createEffect(async () => {
  const domainList = domains();
  const promises = domainList.map(async (domain) => {
    const response = await fetch(`${domain}/rss.xml`);
    if (response.ok) {
      const responseText = await response.text();
      const parser = new window.DOMParser();
      const rssXml = parser.parseFromString(responseText, "text/xml");
      console.log(rssXml);
    } else {
      console.log(`Failed to fetch feed for ${domain}`);
    }
  });
  await Promise.all(promises);
});
