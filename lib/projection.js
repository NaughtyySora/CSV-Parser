const { id, isArray } = require("./common");

const projection = meta => data => meta.reduce((acc, [key, name = key, fn = id]) => {
  if (!data) return acc;

  if (isArray(name)) {
    const result = projection(name)(data[key]);
    acc = { ...acc, ...result };
  }
  else if (typeof data[key] !== "undefined") acc[name] = fn(data[key]);
  return acc;
}, {});

module.exports = projection;