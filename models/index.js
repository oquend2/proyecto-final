const mongoose = require("mongoose")
const bdUrl = "mongodb+srv://yoquend2:Colombia*2018@cluster0-omx13.mongodb.net/devf-cinta-roja?retryWrites=true&w=majority"
const User = require("./User")


mongoose.connect(bdUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    err ? console.log(err) : console.log("Conexión exitosa");
})


module.exports = {
    User
}