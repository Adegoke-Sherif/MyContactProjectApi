const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection")
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorhandler");
dotenv.config();

connectDb()
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.use("/api/contacts", contactRoutes)
app.use("/api/users", userRoutes)

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
