const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv:harenprabudb:admin123@cluster0.3pa7i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = ConnectDB;