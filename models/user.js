const mongoose = require('mongoose');
//const Schema = mongoose.Schema; is written as below
const {Schema} = mongoose;

const UserSchema = new Schema({

    googleId: String

});

mongoose.model('users', UserSchema);