const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next)=>{
//     // console.log(req.method, req.path)
//     // next()
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req,res, next)=>{
//     res.status(501).send('Site is currently down. Check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction =async ()=>{
    const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'}) //generate authentication tokens
    console.log(token)

    const data =jwt.verify(token, 'thisismynewcourse') //verify user is authenticated correctly
    console.log(data)
}

myFunction()

// // using bcrypt - test code
// const bcrypt = require('bcryptjs')

// const myFunction = async ()=>{
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!',hashedPassword)
//     console.log(isMatch)
// }

// myFunction()
