const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();

connectDb();
const port = process.env.PORT || 5000;

const contact = require("./routes/contactRoutes");
const user = require("./routes/userRoutes");

app.use(express.json()); // this will provide us a parser, which will help us to pass the data stream that we receive
// from the client on the server side
app.use("/api/contacts", contact);
app.use("/api/users", user);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
