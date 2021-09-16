// CRUD create read update delete

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId} = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1/27017'
const databaseName = 'task-manager'

const id = new ObjectId()  // generate new ids
// console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client)=>{
    if(error){
        return console.log('Unable to connect database')
    }
    console.log('Connected correctly!')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //  //   _id:id,
    //     name: 'Sakura',
    //     age: '25'
    // }, (error, result)=>{
    //     if(error){
    //        return console.log('Unable to insert user')
    //     }
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 26
    //      },{
    //         name: 'Jone',
    //         age:27
    //     }
    // ],(error,result)=>{
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the house',
    //         completed:true
    //     },{
    //         description:'Renew inspection',
    //         completed : false
    //     },{
    //         description:'Pot plants',
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.insertedIds)
    // })

})
