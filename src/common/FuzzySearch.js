import Fuse from 'fuse.js'

export default function FuzzySearch(searchInput, items, keys) {
  const options = {
    caseSensitive: false,
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys,
  }

  const fuse = new Fuse(items, options)
  const result = searchInput ? fuse.search(searchInput) : items

  return result
}
