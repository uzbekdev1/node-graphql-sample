/**
 * @author
 * Javascript code to submit a form.
 */

/**
 * graphql mutation to insert data
 */

const insertRowMutation = (
  dob,
  gender,
  race,
  ethnicity,
  religion,
  preferred_language,
  nationality,
  marital_status,
  prefix,
  first_name,
  mname,
  lname,
  name_use,
  suffix,
  person_mobile_type,
  person_mobile_value,
  full_name,
  addr_use,
  line1,
  line2,
  city,
  district,
  country,zipcode,atype,evalue,etype,

  website,
  contact_gender,
  relationship,
  isEmergency,
  contact_email,
  contact_type,
  mobile_value,
  mobile_type,
  social_handle,
  social_type,
  contact_prefix,
  contact_fname,
  contact_mname,
  contact_lname,
  contact_use,
  contact_suffix,
  contact_full_name,
  contact_addr_use,
  contact_line1,
  contact_line2,
  contact_city,
  contact_district,
  contact_country,
  contact_zipcode,
  contact_addr_type,
  start_date,
  end_date,

  ssn,
  license,
  itin,
  passport,

  active,
  orgType,
  orgName,
  org_mobile_value,
  org_mobile_type,
  org_full_name,
  org_addr_use,
  org_address_line1,
  org_address_line2,
  org_city,
  org_district,
  org_country,
  org_zipcode,
  org_addr_type,
  org_email_value,
  org_email_type
) =>
  `mutation{
    insertRow(request:{persons:{skyflow_id:"",date_of_birth:"${dob}",gender:"${gender}",race:"${race}",
    ethnicity:"${ethnicity}",religion:"${religion}",preferred_language:"${preferred_language}",
    nationality:"${nationality}",
    marital_status:"${marital_status}",name:{prefix:"${prefix}",first_name:"${first_name}",
    middle_name:"${mname}",last_name:"${lname}",use:"${name_use}",suffix:"${suffix}"},
    phone_numbers:[{value:"${person_mobile_value}",type:"${person_mobile_type}"}],
    addresses:[{full_name:"${full_name}",
    use:"${addr_use}",line_1:"${line1}",
    line_2:"${line2}",city:"${city}",district:"${district}",country:"${country}",
    zip_code:"${zipcode}",address_type:"${atype}"}],emails:[{value:"${evalue}",type:"${etype}"}]},
    
    contacts:{skyflow_id:"",website:"${website}",
    gender:"${contact_gender}",relationship:"${relationship}",is_emergency_contact:"${isEmergency}",emails:[{value:"${contact_email}",type:"${contact_type}"}],
    phone_numbers:[{value:"${mobile_value}",type:"${mobile_type}"}],social_media_handles:[{value:"${social_handle}",type:"${social_type}"}],
    name:{prefix:"${contact_prefix}",first_name:"${contact_fname}",middle_name:"${contact_mname}",last_name:"${contact_lname}",
    use:"${contact_use}",suffix:"${contact_suffix}"},
    addresses:[{full_name:"${contact_full_name}",use:"${contact_addr_use}",line_1:"${contact_line1}",
    line_2:"${contact_line2}",city:"${contact_city}",district:"${contact_district}",country:"${contact_country}",
    zip_code:"${contact_zipcode}",address_type:"${contact_addr_type}"}],
    period:{start_date:"${start_date}",end_date:"${end_date}"}},
    
    identifiers:{skyflow_id:"",ssn:"${ssn}",drivers_license:["${license}"],itin:"${itin}",passport_number:"${passport}"},
    
    organizations:{skyflow_id:"",is_active:"${active}",type:"${orgType}",name:"${orgName}",
    phone_numbers:[{value:"${org_mobile_value}",type:"${org_mobile_type}"}],
    addresses:[{full_name:"${org_full_name}",use:"${org_addr_use}",line_1:"${org_address_line1}",
    line_2:"${org_address_line2}",city:"${org_city}",district:"${org_district}",country:"${org_country}",
    zip_code:"${org_zipcode}",address_type:"${org_addr_type}"}],
    emails:[{value:"${org_email_value}",type:"${org_email_type}"}]}
})
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
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: insertRowMutation(
        formData.get("birth_date"),
        formData.get("gender"),
        formData.get("race"),
        formData.get("ethnicity"),
        formData.get("religion"),
        formData.get("preferred_language"),
        formData.get("nationality"),
        formData.get("marital_status"),
        formData.get("prefix"),
        formData.get("first_name"),
        formData.get("last_name"),
        formData.get("middle_name"),
        formData.get("name_use"),
        formData.get("suffix"),
        formData.get("person_mobile_type"),
        formData.get("person_mobile_value"),
        formData.get("addr_full_name"),
        formData.get("addr_use"),
        formData.get("persons_address_line1"),
        formData.get("persons_address_line2"),
        formData.get("city"),
        formData.get("district"),
        formData.get("country"),
        formData.get("zipcode"),
        formData.get("addr_type"),
        formData.get("email_value"),
        formData.get("email_type"),

        formData.get("website"),
        formData.get("contact_gender"),
        formData.get("relationship"),
        formData.get("isEmergency"),
        formData.get("contact_email_value"),
        formData.get("contact_email_type"),
        formData.get("mobile_value"),
        formData.get("mobile_type"),
        formData.get("social_handle"),
        formData.get("social_type"),
        formData.get("contact_prefix"),
        formData.get("contact_first_name"),
        formData.get("contact_middle_name"),
        formData.get("contact_last_name"),
        formData.get("contact_name_use"),
        formData.get("contact_suffix"),
        formData.get("contact_full_name"),
        formData.get("contact_addr_use"),
        formData.get("contact_address_line1"),
        formData.get("contact_address_line2"),
        formData.get("contact_city"),
        formData.get("contact_district"),
        formData.get("contact_country"),
        formData.get("contact_zipcode"),
        formData.get("contact_addr_type"),
        formData.get("start_date"),
        formData.get("end_date"),

        formData.get("ssn"),
        formData.get("license"),
        formData.get("itin"),
        formData.get("passport"),

        formData.get("active"),
        formData.get("orgType"),
        formData.get("orgName"),
        formData.get("org_mobile_value"),
        formData.get("org_mobile_type"),
        formData.get("org_full_name"),
        formData.get("org_addr_use"),
        formData.get("org_address_line1"),
        formData.get("org_address_line2"),
        formData.get("org_city"),
        formData.get("org_district"),
        formData.get("org_country"),
        formData.get("org_zipcode"),
        formData.get("org_addr_type"),
        formData.get("org_email_value"),
        formData.get("org_email_type")
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

const getDetailsQuery=(table,tableId,type)=>{
if(table==='Persons')
return `query{
  getRecordFrom${table}(request:{id:"${tableId}",type:${type}}){
    name{
      first_name
      last_name
      prefix
      middle_name
      use
      suffix
    }
    date_of_birth
    gender
    ethnicity
    religion
    preferred_language
    nationality
    marital_status
    phone_numbers{
      value
      type
    }
    emails{
      value
      type
    }
    race
    addresses{
      line_1
      line_2
      city
      district
      country
      zip_code
      use
      address_type
    }
  }
}`;
else if(table==='Contacts')
return `query{
  getRecordFrom${table}(request:{id:"${tableId}",type:${type}}){
    website
    gender
    relationship
		is_emergency_contact
    emails{
      value
      type
    }
    phone_numbers{
      value
      type
    }
    social_media_handles{
      value
      type
    }
    name{
      first_name
      last_name
      prefix
      middle_name
      use
      suffix
    }
    period{
      start_date
      end_date
    }
    addresses{
      line_1
      line_2
      city
      district
      country
      zip_code
      use
      address_type
    }
  }
}`;
else if(table==="Identifiers")
return `query{
  getRecordFrom${table}(request:{id:"${tableId}",type:${type}}){
    ssn
    drivers_license
    itin
    passport_number
  }
}`;
else if(table==="Organizations")
return `query{
  getRecordFrom${table}(request:{id:"${tableId}",type:${type}}){
    is_active
    type
    name
    emails{
      value
      type
    }
    phone_numbers{
      value
      type
    }
    addresses{
      line_1
      line_2
      city
      district
      country
      zip_code
      use
      address_type
    }
  }
}`; }

async function getDetails(e) {
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
      query: getDetailsQuery(
        document.getElementById("table").value,
        document.getElementById("tableId").value,
        document.getElementById("type").value
      ),
    }),
  };
  await fetch(`http://localhost:4242`, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      showData(res);
    });
}

const showData=({data})=>{
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("data").innerHTML = JSON.stringify(
    data
  );
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
