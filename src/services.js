export function getClubs() {
  return fetchClubs()
}

export function postClub(data) {
  return fetchClubs({ method: 'POST', data })
}

function fetchClubs({ method = 'GET', id = '', data } = {}) {
  return fetch('/clubs/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
