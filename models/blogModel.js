const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'title is empty']
    },
    description: {
        type: String,
        required: [true, 'write description']
    },
    image: {
        type: String,
        required: [true, 'please insert image']
    },
    user: {
        type: mongoose.Types.ObjectId, //get user via mongoose
        ref: 'User',
        require: [true, "user id is required"],
    },
}, { timestamps: true })

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;