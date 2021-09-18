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

    // db.collection('users').findOne({name:'Jen'},(error,user)=>{
    // db.collection('users').findOne({name:'Jen', age:1},(error,user)=>{ //gives null
    // db.collection('users').findOne({_id:"61422b25269cdae3ecf827b0"},(error,user)=>{ //_id is binary value - so gives null
    // db.collection('users').findOne({_id:new ObjectId("61422b25269cdae3ecf827b0")},(error,user)=>{    
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({age:27}).count((error,count)=>{
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(count)
    // })

    db.collection('tasks').findOne({_id:new ObjectId('6142301ff28ac40faa7e73f3')},(error,task)=>{
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(tasks)
    })

})
