# task-manager

This is a nodejs project with A task manager REST API complete with user accounts and authentication which is deployed in heroku.

Prod Env : https://ishani-task-manager.herokuapp.com/  

## Tech Stack

**Server:** Node, Express, Mongoose

**Database:** MongoDB

## Getting Started
### Run Locally

Clone the project

```bash
  git clone https://github.com/IshaniShashikala/task-manager-api.git
```

Go to the project directory

```bash
  cd task-manager-api
```

Install dependencies

```bash
  npm install
```

Setup dev.env and test.env files with PORT, SENDGRID_API_KEY, MONGODB_URL, JWT_SECRET inside ./config/dev.env

Start the server

```bash
  npm run dev
```
### Deployment

To deploy this project run

```bash
  npm run start
```
### Run Tests

To execute the jest tests

```bash
  npm test
```
## Lessons Learned

1. Node.js
2. Npm
3. Asynchronous programming
4. ES6/ES7
5. MongoDB
6. Express
7. JWT Authentication
8. Mongoose
9. File and image uploads
10. Email sending
11. Application deployment with Heroku
12. REST API Design
13. Code testing
14. Jest
  - Build, test, and launch Node apps
  - Create Express web servers and APIs
  - Store data with Mongoose and MongoDB
  - Use cutting-edge ES6/ES7 JavaScript
  - Deploy your Node apps to production

## Appendix
- MongoDB Tutorial For Beginners #2 - Install MongoDB on Windows - https://www.youtube.com/watch?v=SBwNOzuJMyY&t=0s
- How to Install MongoDB on Windows 10 - https://www.youtube.com/watch?v=FwMwO8pXfq0
- Sending email via Node.js using nodemailer is not working - https://stackoverflow.com/questions/26196467/sending-email-via-node-js-using-nodemailer-is-not-working
- npm start vs node app.js - https://stackoverflow.com/questions/31362021/npm-start-vs-node-app-js
