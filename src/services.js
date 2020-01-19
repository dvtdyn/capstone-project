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

export function getPlayer() {
  return fetchPlayer()
}

export function postPlayer(data) {
  return fetchPlayer({ method: 'POST', data })
}

function fetchPlayer({ method = 'GET', id = '', data } = {}) {
  return fetch('/player/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
