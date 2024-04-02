export const fetcher = (props: RequestInfo | URL) =>
  fetch(props).then((res) => res.json());
