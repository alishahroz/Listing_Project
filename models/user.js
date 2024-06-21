const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);                         //use plugin bcz it crt hashing, username, pass, salting automatically

module.exports = mongoose.model('User', userSchema);