const mongoose = require("mongoose") 
const treeSchema = mongoose.Schema({ 
    treeColor: String, 
    age: Number, 
    name: {
        type: String,
        minLength: 2
    }
}) 
 
module.exports = mongoose.model("Trees", 
treeSchema)