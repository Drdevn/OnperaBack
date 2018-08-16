const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pageSchema = new Schema({

  name: {String, required: true},
  level: {String, required: true},
  isActive: Boolean,
  childOf: String,
  hasChild: [String],
  pageContent: [{text: String, position:String, isActive: String, required: true }]

});
module.exports = mongoose.model('page', pageSchema, 'pages');