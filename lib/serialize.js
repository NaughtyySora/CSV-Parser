const { id } = require("./common");

const saveJSONParse = value => {
  try {
    return JSON.parse(value);
  } catch {
    return '';
  }
};

const serializers = {
  string: value => value ? saveJSONParse(value) : value,
  object: id,
};

module.exports = { serializers };