const { serializers } = require("./lib/serialize");
const { noop, isArray } = require("./lib/common");
const projection = require("./lib/projection");
const toCSV = require("./lib/toCSV");

const parser = (dataset, meta) => {
  const type = typeof dataset;
  const serializer = serializers[type] || noop;
  let parsed = serializer(dataset);
  if (!parsed) return parsed;
  if (!isArray(parsed)) parsed = [parsed];
  return toCSV(parsed.map(projection(meta)));
};

module.exports = parser;