const coins = require("../mocks/coin.json");
const parser = require("../main");
const fs = require("node:fs");

const data = [
  '[{"name": "a", "age": 12}, {"name": "asd", "age": 231, "test": {"a": 1}}]',
  '{"vlad":{"phone":1}}',
  coins,
  JSON.parse(coins).transactions
];

const meta = [
  [["name", "name_1", x => x + "A"], ["age"], ["test", [["a", "test2", x => x += 1]]]],
  [["vlad", [["phone", "mobile_phone"]]]],
  [["name"], ["symbol"], ["transactions", [["id"]]]],
  [["profit", undefined, x => `Profit: ${x}`], ["type", "transaction_type", x => x.toUpperCase()], ["amount"]]
];

const names = [
  "test.csv",
  "test2.csv",
  "coin.csv",
  "transactions.csv"
];

let key = 0;
for (const item of data) {
  const result = parser(item, meta[key]);
  fs.writeFile(`./${names[key]}`, result, err => {
    if (err) console.log(`\x1b[31m ${err} \x1b[0m`)
  });
  key++;
}