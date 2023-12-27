const mongoose = require("mongoose");

function connectToDB(connentionString) {
  return mongoose.connect(connentionString);
}

module.exports = connectToDB;
