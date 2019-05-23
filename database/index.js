//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost/account'

mongoose.connect(uri).then(
    () => {
        console.log('Connected to Mongo account')
    },
    err => {
         console.log('error connecting to Mongo account: ')
         console.log(err);
        }
  );


module.exports = mongoose.connection
