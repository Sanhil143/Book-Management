const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const router = require("./routers/router")



mongoose.set('strictQuery', true)
const app = express()
app.use(express.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/group16Database")
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