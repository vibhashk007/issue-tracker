const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kumarvibhash19:Fvq5wtvI9FPfc5p6@issue-tracker.alajrc1.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongoose.connection;

//If any Error then Getting this Line
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database :: MongoDB ");
});

module.exports = db; //Exports db
