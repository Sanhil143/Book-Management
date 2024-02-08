const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const router = require("./routers/router")
const cors = require('cors')
const dotenv = require('dotenv')


mongoose.set('strictQuery', true)
const app = express()
app.use(cors())
app.use(express.json())
app.use(multer().any())
dotenv.config();


mongoose.connect(process.env.MY_DB_URL)
.then(() => console.log("My mongoDB is connected"))
.catch((err) => console.error(err))


app.use("/", router)


app.listen(3000, () => {
      console.log("Express app running on port " + 3000);
})

//create review = delete something
// update review handle edge cases
// "engines": {
//       "npm": ">=8.0.0 <9.0.0",
//       "node": ">=16.0.0 <17.0.0"
//     },