const mongoose = require("mongoose");
uri = "mongodb+srv://<username>:<password>@projectapi.sqlhphb.mongodb.net/<ProjectApi>?retryWrites=true&w=majority";
const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}; 

module.exports = connectDB;
