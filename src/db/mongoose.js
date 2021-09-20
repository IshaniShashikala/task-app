const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    // useNewUrlParser: true, //thses are not supported. mongose 6 behaves these are true
    // useCreateIndex: true
})
