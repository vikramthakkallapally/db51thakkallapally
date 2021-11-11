const mongoose = require("mongoose") 
const treeSchema = mongoose.Schema({ 
    treeColor: String, 
    age: Number, 
    name: String 
}) 
 
module.exports = mongoose.model("Trees", 
treeSchema)