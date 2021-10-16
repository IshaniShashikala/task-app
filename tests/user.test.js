const request = require('supertest')
const app = require('../src/app')


test('Should signup a new user',async()=>{
    await request(app).post('/users').send({
        name:'Ishani',
        email:'ishani@liveroom.xyz',
        password:'MyPass777!'
    }).expect(201)
})