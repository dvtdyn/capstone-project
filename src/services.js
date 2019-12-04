export function getClubs() {
  return fetch('/clubs').then(res => res.json())
}
