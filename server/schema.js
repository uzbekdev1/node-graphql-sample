var { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query{
  rows:[Row]!,
  getRecordFromPersons(request:recRequest):person
  getRecordFromIdentifiers(request:recRequest):identifier
  getRecordFromContacts(request:recRequest):contact
  getRecordFromOrganizations(request:recRequest):organization
}

input recRequest{
  id:String
  type:dataType
}

enum dataType{
  REDACTED
  TOKEN
  PLAIN_TEXT
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
type person{
  skyflow_id:String
  date_of_birth:String
  gender:String
  race:String
  ethnicity:String
  religion:String
  preferred_language:String
  nationality:String
  marital_status:String
  name:nameType
  addresses:[addressType]
  phone_numbers:[valueType]
  emails:[valueType]   
}

input identifiers{
  skyflow_id:String
  ssn:String
  drivers_license:[String]
  itin:String
  passport_number:String
}

type identifier{
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

type contact{
  skyflow_id:String
  website:String
  gender:String
  relationship:String
  is_emergency_contact:String
  emails:[valueType]
  phone_numbers:[valueType]
  social_media_handles:[valueType]
  name:nameType
  addresses:[addressType]
  period:dateType
}
input name{
  prefix:String
  first_name:String
  middle_name:String
  last_name:String
  use:String
  suffix:String
}

type nameType{
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

type organization{
  skyflow_id:String
  is_active:String
  type:String
  name:String
  phone_numbers:[valueType]
  addresses:[addressType]
  emails:[valueType]
}

input values{
  value:String
  type:String
}

type valueType{
  value:String
  type:String
}

input date{
  start_date:String
  end_date:String
}

type dateType{
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

type addressType{
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
