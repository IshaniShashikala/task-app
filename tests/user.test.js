const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: '56mike2!'
}

beforeEach(async()=>{
    await User.deleteMany()
    await new User(userOne).save()
    // console.log('beforeEach')
})

// afterEach(()=>{
//     console.log('afterEach')
// })

test('Should signup a new user',async()=>{
    await request(app).post('/users').send({
        name:'Ishani',
        email:'ishani@liveroom.xyz',
        password:'MyPass777!'
    }).expect(201)
})

test('Should login exsisting user', async()=>{
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})


test('Should not login nonexsisting user',async()=>{
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: '56mik'
    }).expect(400)
})