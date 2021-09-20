require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6146cb745bd3fff59cc81646',{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})