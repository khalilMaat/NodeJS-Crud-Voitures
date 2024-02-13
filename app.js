//import express
const express = require("express") 
const app = express()
const PORT = 4000
//import carRouter
const car = require("./routes/car")

//Route Car
app.use("/car", car)



//Run App SERVER
app.listen(PORT , () => {
    console.log(`Server is Running on ${PORT}`);
})

