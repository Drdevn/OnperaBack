const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pageSchema = new Schema({

  name: String,
  level: String,
  isActive: Boolean,
  childOf: String,
  hasChild: [String],
  pageContent: [{text: String, position:String, isActive: String }]

});
module.exports = mongoose.model('page', pageSchema, 'pages');