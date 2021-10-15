const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math')

test('Should calculate total with tip',()=>{
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
})

test('Should calculate total with default tip',()=>{
       const total = calculateTip(10)
       expect(total).toBe(12.5)
}) 

test('Should convert Fahrenheit to Celsius', ()=>{
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})


test('Should convert Celsius to Fahrenheit',()=>{
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async Test Demo',(done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })
//this fails because of actual and expected value are different 

test('Should add two numbers', (done)=>{
    add(2,3).then((sum)=>{
        expect(sum).toBe(5)
        done()
    })
})

//awit --> jest waits till everything done 
//async function always return a promise
//( jest waits for the promise to either fulfilles or rejected before figuring out if the test case is pass or fail )

test('Should add two numbers async/await', async()=>{
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})