const mongoose = require("mongoose") //connection establish karenge 
const connectdatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb database ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Mongo Error ${error}`);
    }
};

module.exports = connectdatabase;