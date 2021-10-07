const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to:'ishaniist@gmail.com',
    from:'ishaniist@gmail.com',
    subject:'This is my first creation',
    text:'I hope this one actualy get to you.'
})