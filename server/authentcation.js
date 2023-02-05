const db = require('./db')

const register = (name, email, mobile, age, username, password) => {
    return db.User.findOne({ username })
        .then(data => {
            if (data) {
                return {
                    statuscode: 422,
                    status: false,
                    message: "uname is already used"
                }
            } else {
                const newUser = new db.User({ name, email, mobile, age, username, password })
                newUser.save()
                return {
                    statuscode: 200,
                    status: true,
                    message: "user created successfully",
                }
            }
        })
}


const login = (username, password) => {
    return db.User.findOne({ username, password })
        .then(data => {
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    message: "login successful",
                }
            } else {
                return {
                    statuscode: 400,
                    status: false,
                    message: "invalid username / password"
                }
            }
        }
        )
}



const addjob = (jobname, description, place, time, company, number) => {
    return db.Job.findOne({ jobname })
        .then(data => {
            const newJob = new db.Job({ jobname, description, place, time, company, number })
            newJob.save()
            return {
                statuscode: 200,
                status: true,
                message: "Job Add successfully",
            }
        }        )
}



const joblist = (jobname, description, place, time, company, number) => {
    return db.Job.findOne({ jobname })
        .then(data => {
            if (data) {
                return {
                    statuscode: 200,
                    status: true,
                    message: "job show successful",
                }
            } else {
                return {
                    statuscode: 400,
                    status: false,
                    message: "not show"
                }
            }
        }
        )
}



module.exports = { register, login, addjob ,joblist}