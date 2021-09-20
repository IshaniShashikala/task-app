require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6148142db0bbbdc28f83d5d5').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})