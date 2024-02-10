const noop = () => "";
const isArray = ds => Array.isArray(ds) && !!ds.length;
const id = x => x;

module.exports = { noop, isArray, id };