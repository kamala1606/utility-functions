export default function getURLSlug(words) {
  return word
    .replace(/\s+/g, '-')
    .toLowerCase();
}
