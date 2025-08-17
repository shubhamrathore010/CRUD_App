const express = require("express");
const cors = require("cors")


const app = express()

let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) =>{
    res.json({ message: "Welcome to shubham application"})
})

const PORT = process.env.PORT || 8080;
require("./routes/tutorial.routes.js")(app);
app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
})


const db = require("./models");
const { connect } = require("mongoose");

db.mongoose
.connect(db.url, 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
)

.then(() => {
    console.log("Connected to the database!");
})
.catch(err =>{
    console.log("Cannot connect to the database", err);
    process.exit();
})

// connect()
