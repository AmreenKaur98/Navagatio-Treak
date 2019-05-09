const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NavSchema = new Schema({
    name_of_place: {
        type: String
    },
    check_in: {
        type: Date
    },
    check_out: {
        type: Date
    },
    no_of_people: {
        type: Number
    },
    price:{
      type: Number
    }
});

module.exports = mongoose.model('NavSchema', NavSchema);
