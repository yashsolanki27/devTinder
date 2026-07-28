const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://solankiyash7227_db_user:3JC0JIUH8lnKy7GT@mastermajor.mmeakfc.mongodb.net/devTinder",
  );

  console.log("MongoDB connected");
};

module.exports = connectDB;
