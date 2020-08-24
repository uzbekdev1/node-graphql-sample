var { connect } = require("skyflow-node");
require("dotenv").config();

const client = connect(
  process.env.ORG_ID,
  process.env.SKYFLOW_USERNAME,
  process.env.SKYFLOW_PASSWORD,
  process.env.APP_ID,
  process.env.APP_SECRET
);

async function insertRecords(recordData) {
  let token = "";
  await client
    .insertRecord(process.env.VAULT_ID, recordData)
    .then((res) => {
      console.log("inserted token", res);
      token = res;
    })
    .catch((err) => console.log(err));
  console.log(token);
  return token;
}

async function insertRowInVault({ request }) {
  recordData = [];
  for (let key in request) {
    recordData.push({ name: key, value: request[key] });
  }
  const token = await insertRecords(recordData);
  return { message: token.ID };
}

var root = {
  insertRow: insertRowInVault,
};

module.exports = { root };
