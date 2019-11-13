const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    cedula:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: String,

    
     
    category: String,
    company: String,
    
    is_active: {
        type: Boolean,
        default: true
    }
}, 
// para colocar fecha de creacion y de actualizacion 
{timestamps:true} )

const User = mongoose.model("User", userSchema)


module.exports = User