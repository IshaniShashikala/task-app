const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'ishaniist@gmail.com',
        subject:'Thanks for joining in!',
        text:'Welcome to the app, ${name}. Let me know you get along with the app'
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'ishaniist@gmail.com',
        subject:'Sorry to see you go ',
        text:'Goodbye, ${name}. I hope to see you back sometime soon'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
