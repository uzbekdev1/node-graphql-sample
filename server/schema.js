
var { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query{
    rows:[Row]!,
}

type Row{
    identity_id:String
    first_name:String
    last_name:String
    middle_name:String
      gender:String
      birth_date:String
      ssn:String
      mobile_phone_number:String
      home_phone_number:String
      ethnicity:String
      primary_address_line1:String
      primary_address_line2:String
      primary_address_city:String
      primary_address_state:String
      primary_address_zipcode:String
      notes:String
}

type Mutation{
    insertRow(request: rowRequest!): addedRow!
}

input rowRequest{
  identity_id:String
  first_name:String
  last_name:String
  middle_name:String
    gender:String
    birth_date:String
    ssn:String
    mobile_phone_number:String
    home_phone_number:String
    ethnicity:String
    primary_address_line1:String
    primary_address_line2:String
    primary_address_city:String
    primary_address_state:String
    primary_address_zipcode:String
    notes:String
}

  type addedRow{
    message:String
  }
  

`);

module.exports={schema};