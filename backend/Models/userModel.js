const mongoose = require("mongoose");
const bcrypt = require ("bcrypt")
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

userSchema.pre("save",async function(next) {
    if (this.isModified("password")) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)        
    } 
    next()   
})

module.exports = mongoose.model("User", userSchema);
