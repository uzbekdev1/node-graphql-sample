var { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query{
  rows:[Row]!,
}

type Row{
  skyflow_id:String
  date_of_birth:String
  gender:String
  race:String
    ethnicity:String
    religion:String
    ssn:String
    preferred_language:String
    nationality:String
    marital_status:String
    identifiers_skyflow_id:String
    contacts_skyflow_id:String
    name:String
    addresses:String
    phone_numbers:String
    emails:String
}

type Mutation{
    insertRow(request: rowRequest!): addedRow!
}

input rowRequest{
  persons:persons
  contacts:contacts
  identifiers:identifiers
  organizations:organizations  
}

input persons{
      skyflow_id:String
      date_of_birth:String
      gender:String
      race:String
      ethnicity:String
      religion:String
      preferred_language:String
      nationality:String
      marital_status:String
      identifiers_skyflow_id:String
      contacts_skyflow_id:String
      name:name
      addresses:[addresses]
      phone_numbers:[values]
      emails:[values]
}

input identifiers{
  skyflow_id:String
  ssn:String
  drivers_license:[String]
  itin:String
  passport_number:String
}

input contacts{
  skyflow_id:String
  website:String
  gender:String
  relationship:String
  is_emergency_contact:String
  organizations_skyflow_id:String
  emails:[values]
  phone_numbers:[values]
  social_media_handles:[values]
  name:name
  addresses:[addresses]
  period:date
}

input name{
  prefix:String
  first_name:String
  middle_name:String
  last_name:String
  use:String
  suffix:String
}
input organizations{
  skyflow_id:String
  is_active:String
  type:String
  name:String
  phone_numbers:[values]
  addresses:[addresses]
  emails:[values]
}

input values{
  value:String
  type:String
}

input date{
  start_date:String
  end_date:String
}
input addresses{
  full_name:String
  use:String
  line_1:String
  line_2:String
  city:String
  district:String
  country:String
  zip_code:String
  address_type:String
}
  type addedRow{
    message:String
  }
  

`);

module.exports = { schema };
