const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser: true, //thses are not supported. mongose 6 behaves these are true
    // useCreateIndex: true
    // useFindAndModify: false
})
