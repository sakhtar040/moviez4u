const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 2000;
const db = require("./config/database");
const homeRoute = require("./routes/home");
const loginRoute = require("./routes/login");
const apiRoute = require("./api/api");
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
mongoose
	.connect(db.mongoURI, { useNewUrlParser: true })
	.then(() => console.log("Database Connected.."))
	.catch(err => console.log(err));

app.use("/admin", homeRoute);
app.use("/login", loginRoute);
app.use("/api", apiRoute);

//Server Static Assets if in Prod
if (process.env.NODE_ENV == "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
