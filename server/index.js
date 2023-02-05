const express = require('express')
const service = require('./authentcation')

const cors = require('cors')

const app = express()


// npm i cors   for installing cors  for conncecting frond end back end
app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.json())


app.post('/register', (req, res) => {
    service.register(req.body.name, req.body.email, req.body.mobile, req.body.age, req.body.username, req.body.password)
        .then(data => {
            if (data) {
                res.status(data.statuscode).json(data)
            }
        })
})



app.post('/login', (req, res) => {
    service.login(req.body.username, req.body.password)
        .then(data => {
            if (data) {
                res.status(data.statuscode).json(data)
            }
        })
})


app.post('/addjob', (req, res) => {
    service.addjob(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number)
        .then(data => {
            if (data) {
                res.status(data.statuscode).json(data)
            }
        })
})

app.get('/addjob', (req, res) => {
    service.joblist(req.body.jobname, req.body.description, req.body.place, req.body.time, req.body.company, req.body.number)
        .then(data => {
            if (data) {
                res.status(data.statuscode).json(data)
            }
        })
})





app.listen(3000, () => {
    console.log('server listening  the port number 3000')
})
