const toCSV = data => {
  const head = [];
  const lines = data.map(item => {
    const keys = Object.keys(item);
    head.push(keys);
    return "\n" + Object.values(item).join(",");
  });

  return [...new Set(head.flat())].join(",") + lines;
};

module.exports = toCSV;