// app-helpers.js — Standalone helper functions (not on App)

// === HELPERS ===
const _highlightCache = new Map();
function highlightText(text, query) {
  if (!query) return text;
  const words = query.split(/\s+/).filter(w => w.length > 1);
  let result = text;
  for (const word of words) {
    let re = _highlightCache.get(word);
    if (!re) {
      re = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      _highlightCache.set(word, re);
      if (_highlightCache.size > 50) _highlightCache.delete(_highlightCache.keys().next().value);
    }
    result = result.replace(re, '<mark>$1</mark>');
  }
  return result;
}
