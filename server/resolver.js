var { connect } = require("skyflow-node");
require("dotenv").config();

const client = connect(
  process.env.ACCOUNT_NAME,
  process.env.WORKSPACE_NAME,
  process.env.VAULT_ID,
  //copy credentials.json data here
);

async function insertRecords(recordData) {
  let token = "";
  for (let record of recordData) {
    recs = [{ fields: record.value }];
    await client
      .insertRecords(record.name, recs)
      .then((res) => {
        console.log("inserted token", res);
        if (res.records) token = res.records[0].skyflow_id;
        else token = "error";
      })
      .catch((err) => console.log(err));
  }

  return token;
}

async function insertRowInVault({ request }) {
  recordData = [];
  for (let key in request) {
    recordData.push({ name: key, value: request[key] });
  }
  const token = await insertRecords(recordData);
  return { message: token };
}

var root = {
  insertRow: insertRowInVault,
};

module.exports = { root };
