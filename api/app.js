const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connection } = require("./src/db/connection");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Get Routers
const userRoute = require("./src/routes/Learner/user.route");

//setUp routers
app.use("/api/v2/auth", userRoute);

// Error hanlding middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    statucode: err.statucode,
    message: err.message,
  });
});

const port = process.env.PORT || "6060";
const start = async () => {
  await connection().then(
    app.listen(port, console.log(`The server is listening on port ${port}`))
  );
};
start();
