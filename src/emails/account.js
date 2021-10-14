const sgMail = require('@sendgrid/mail')
// const nodemailer = require('nodemailer')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from:'ishani@liveroom.xyz',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know you get along with the app`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:'ishani@liveroom.xyz',
        subject:'Sorry to see you go ',
        text:`Goodbye, ${name}. I hope to see you back sometime soon`
    })
}


// function transporter() {
//     return nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user: '********@gmail.com', //Give email address
//             pass:'******'   //Give password (or special app password)
//         }
//     })
// }

// function sendWelcomeEmail(email, name) {
//     const transporterObject = transporter()
//     transporterObject.sendMail({
//         from: 'Task Manager API <ishani@liveroom.xyz>',
//         to: email,
//         subject: 'Thanks for joining!',
//         text: `Welcome to our service, ${name}!`,
//         html: `<b>Welcome to our service, ${name}!</b>`
//     })
// }
 
// function sendCancelationEmail(email, name) {
//     const transporterObject = transporter()
//     transporterObject.sendMail({
//         from: 'Task Manager API <ishani@liveroom.xyz>',
//         to: email,
//         subject: 'We\'re sorry to see you leave',
//         text: `We hope to see you back again someday, ${name}!`,
//         html: `<b>We hope to see you back again someday, ${name}!</b>`
//     })
// }

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
