require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6148142db0bbbdc28f83d5d5').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('61475c58973dc29d952625c0').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
