/**
 * @author
 * Javascript code to submit a form.
 */

/**
 *
 * @param {*} id
 * @param {*} fname
 * @param {*} lname
 * @param {*} mname
 * @param {*} gender
 * @param {*} dob
 * @param {*} ssn
 * @param {*} mobile
 * @param {*} phone
 * @param {*} eth
 * @param {*} adr1
 * @param {*} adr2
 * @param {*} city
 * @param {*} state
 * @param {*} zipcode
 * @param {*} notes
 *
 *
 * graphql mutation to insert data
 */

const insertRowMutation = (
  id,
  fname,
  lname,
  mname,
  gender,
  dob,
  ssn,
  mobile,
  phone,
  eth,
  adr1,
  adr2,
  city,
  state,
  zipcode,
  notes
) => `mutation{
    insertRow(request:{identity_id:"${id}",first_name:"${fname}",last_name:"${lname}",middle_name:"${mname}",
    gender:"${gender}",
    birth_date:"${dob}",
    ssn:"${ssn}",
    mobile_phone_number:"${mobile}",
    home_phone_number:"${phone}",
    ethnicity:"${eth}",
    primary_address_line1:"${adr1}",
    primary_address_line2:"${adr2}",
    primary_address_city:"${city}",
    primary_address_state:"${state}",
    primary_address_zipcode:"${zipcode}",
    notes:"${notes}"})
   {
    message 
   }
}`;

/**
 *
 * making a call to express server to perform mutation.
 */
async function insertRow(e) {
  e.preventDefault();
  var modal = document.getElementById("myModal");

  modal.style.display = "block";
  document.getElementById("loader").style.display = "block";
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: insertRowMutation(
        document.getElementById("identity_id").value,
        document.getElementById("first_name").value,
        document.getElementById("last_name").value,
        document.getElementById("middle_name").value,
        document.getElementById("gender").value,
        document.getElementById("birth_date").value,
        document.getElementById("ssn").value,
        document.getElementById("mobile_phone_number").value,
        document.getElementById("home_phone_number").value,
        document.getElementById("ethnicity").value,
        document.getElementById("primary_address_line1").value,
        document.getElementById("primary_address_line2").value,
        document.getElementById("primary_address_city").value,
        document.getElementById("primary_address_state").value,
        document.getElementById("primary_address_zipcode").value,
        document.getElementById("notes").value
      ),
    }),
  };

  await fetch(`http://localhost:4242`, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      showResponse(res);
    });
}

const showResponse = ({ data }) => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("ref_id").innerHTML = JSON.stringify(
    data.insertRow.message
  );
};

const close = (event) => {
  event.preventDefault();
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};
