const validator = require('validator')
const validate = (data)=>{

    const madatoryField=['firstName','lastName','email','password'];
    const IsAllowed = madatoryField.every((k)=>Object.keys(data).includes(k));

    if(!IsAllowed) {
        throw new Error ("some Field is missing");
    }

    if(!validator.isEmail(data.email)){
        throw new Error ("Invalid Email");
    }
    if(!validator.isStrongPassword(data.password)){
        throw new Error ("Invalid Email");
    }
    if(data.firstName.length<2){
        throw new Error ("minimum 2 character required");
    }
    if(data.firstName.length>20){
        throw new Error ("maximum 20 character");
    }
    if(data.lastName.length<2){
        throw new Error ("minimum 2 character required");
    }
    if(data.lastName.length>20){
        throw new Error ("maximum 20 character");
    }
    if(data.age<4 && data.age > 120){
        throw new Error ("your age between 4 to 120");
    }
}

module.exports = validate