/* Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities. */

function convertHTML(str) {
  const pairs = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };
  return str
    .split("")
    .map((a) => (pairs[a] ? pairs[a] : a))
    .join("");
}