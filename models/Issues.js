const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  reportedBy: {
    type: String,
    required: true
  },

  assignedTo: {
    type: String,
    required: true
  },

  createdDate: {
    type: Date,
    default: Date.now
  },

});

module.export = mongoose.model("Issue", IssueSchema);