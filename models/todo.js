var mongoose = require("mongoose");
var TodoSchema = new mongoose.Schema({
	 text: {
        type: String,
        default: ''
    }
  });
module.exports  =  mongoose.model('Todo', TodoSchema);
