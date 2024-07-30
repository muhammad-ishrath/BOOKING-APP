
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//export allow this to import from other files
// defines the overall tyepe of the user 
//named exports or  {}imports 
export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

//structure of the document 
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique:true},
    password:{type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}

});

//pre save hook
// if we dont call the next function it wont proceed 
// await wait till the task is finished
// when number is higher stronger the encryption but higher the time taken
userSchema.pre("save", async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
});


//creates the mongoose model 
const User = mongoose.model<UserType>("User", userSchema);

// making it available to imort from other files
export default User;

