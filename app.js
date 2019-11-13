const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const url = "/api/v1/"
const { User } = require("./models/index")

// crud (create, read, update, delete)

app.use(express.urlencoded( { extended:true}))
app.use(express.json())

app.post(`${url}create/user`, (req, response)=>{
    const data = req.body
    const newUser = new User(data)
    newUser.save((err, user) =>{
        err ? response.status(409).send(err) :  response.status(201).send(user)
        // if (err) {
        //     response.status(409).send(err)
        // } else {
        //     response.status(201).send(user)
        // }
    })
})

app.get(`${url}get/user/:usercedu`, (request, response) => {
    const cedula = request.params.usercedu
    User.findOne({cedula: cedula}, (err, user) => {
        err ? response.status(404).send(err) :  response.status(201).send(user)
        // if (err) {
        //     response.status(404).send(err)
        // } else {
        //     response.status(200).send(user)
        // }
    })
})

app.get(`${url}get/users`, (request, response) => {
    User.find({ is_active: true }, (err, users) => {
        err ? response.status(404).send(err) :  response.status(201).send(users)
        // if (err) {
        //     response.status(404).send(err)
        // } else {
        //     response.status(200).send(users)
        // }
    })
})

app.put(`${url}update/user/:usercedu`, (request, response) => {
    const cedula = request.params.usercedu
    const newUser = request.body
    User.findOneAndUpdate({cedula: cedula}, { $set: newUser }, { new: true }, (err, user) => {
        err ? response.status(404).send(err) :  response.status(201).send(user)
        // if (err) {
        //     response.status(404).send(err)
        // } else {
        //     response.status(200).send(user)
        // }
    })
})

app.delete(`${url}delete/user/:usercedu`, (request, response) => {
    const cedula = request.params.usercedu
    User.findOneAndUpdate({cedula: cedula}, { $set: { is_active: false } }, { new: true }, (err, user) => {
        err ? response.status(404).send(err) :  response.status(201).send("El usuario ha sido eliminado")
        // if (err) {
        //     response.status(404).send(err)
        // } else {
        //     response.status(200).send("El usuario ha sido eliminado")
        // }
    })
})

// ELIMINAR POR ID
// app.get("/api/v1/get/user/:userid", (request, response) => {
//     const id = request.params.userid
//     User.findById(id, (err, user) => {
//         if (err) {
//             response.status(404).send(err)
//         } else {
//             response.status(200).send(user)
//         }
//     })
// })
// app.delete("/api/v1/delete/user/:userid", (request, response) => {
//     const id = request.params.userid
//     User.findByIdAndUpdate(id, { $set: { is_active: false } }, { new: true }, (err, user) => {
//         if (err) {
//             response.status(404).send(err)
//         } else {
//             response.status(200).send("El usuario ha sido exterminado")
//         }
//     })
// })


app.listen(PORT, (err) => {
    console.log(`Server in port  ${PORT}`);
})