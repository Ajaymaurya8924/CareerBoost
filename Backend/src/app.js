const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const companyRoutes = require("./routes/company.routes");
const questionRoutes = require("./routes/question.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/question", questionRoutes);

app.get("/", (req, res) => {
    res.send("CareerBoost API Running...");
});

module.exports = app;