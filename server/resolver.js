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

async function getRecordFromPersons({ request }) {
  let response = "";
  const req =
    request.type == "REDACTED"
      ? request.id
      : request.type == "TOKEN"
      ? `${request.id}?dlp=TOKEN`
      : `${request.id}?dlp=PLAIN_TEXT`;
  await client
    .getRecord("persons", req)
    .then((res) => {
      response = res.fields;
    })
    .catch((err) => (response = error));

  return response;
}

async function getRecordFromContacts({ request }) {
  let response = "";
  const req =
    request.type == "REDACTED"
      ? request.id
      : request.type == "TOKEN"
      ? `${request.id}?dlp=TOKEN`
      : `${request.id}?dlp=PLAIN_TEXT`;

  await client
    .getRecord("contacts", req)
    .then((res) => {
      response = res.fields;
    })
    .catch((err) => (response = error));

  return response;
}

async function getRecordFromIdentifiers({ request }) {
  let response = "";
  const req =
    request.type == "REDACTED"
      ? request.id
      : request.type == "TOKEN"
      ? `${request.id}?dlp=TOKEN`
      : `${request.id}?dlp=PLAIN_TEXT`;

  await client
    .getRecord("identifiers", req)
    .then((res) => {
      response = res.fields;
    })
    .catch((err) => (response = error));

  return response;
}

async function getRecordFromOrganizations({ request }) {
  let response = "";
  const req =
    request.type == "REDACTED"
      ? request.id
      : request.type == "TOKEN"
      ? `${request.id}?dlp=TOKEN`
      : `${request.id}?dlp=PLAIN_TEXT`;

  await client
    .getRecord("organizations", req)
    .then((res) => {
      response = res.fields;
    })
    .catch((err) => (response = error));

  return response;
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
  getRecordFromPersons: getRecordFromPersons,
  getRecordFromContacts: getRecordFromContacts,
  getRecordFromIdentifiers: getRecordFromIdentifiers,
  getRecordFromOrganizations: getRecordFromOrganizations,
};

module.exports = { root };
