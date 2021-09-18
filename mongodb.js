// CRUD create read update delete

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId} = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1/27017'
const databaseName = 'task-manager'

const id = new ObjectId()  // generate new ids

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client)=>{
    if(error){
        return console.log('Unable to connect database')
    }
    console.log('Connected correctly!')

    const db = client.db(databaseName)

        //using promises

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectId('61422b25269cdae3ecf827af')
    // },{
    //     $set:{
    //         name:'Mike'
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('users').updateOne({
        _id: new ObjectId('61422b25269cdae3ecf827af')
    },{
        // $set:{
        //     name:'Mike'
        // }
        $inc:{
            age: 1
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed: false
    },{
        $set:{
            completed:true
        }
    }).then((result)=>{
        console.log(result.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })

})
