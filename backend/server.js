const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");

const respositoryRoutes = require("./routes/repositoryRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/repositories", respositoryRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "mini Github Api is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
