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

    db.collection('users').deleteMany({
        age:27
    }).then((result)=>{
        console.log(result)
    }).catch((erroe)=>{
        console.log(error)
    })   

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log(e)
    })

})
