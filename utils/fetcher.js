export default async function fetcher(url, token) {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      "Content-Type": "application/json",
      token
    }),
    credentials: 'same-origin'
  });
  return res.json();
}