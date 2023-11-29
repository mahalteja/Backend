const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
  heading: {
    type: String,
  },
  subheading: {
    type: String,
  },
  content: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  isUpdated: {
    type: Boolean,
    default: false,
  },
  LastUpdated: {
    type: Date,
    default: new Date(),
  },
  isPosted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("blogdata", BlogSchema);
