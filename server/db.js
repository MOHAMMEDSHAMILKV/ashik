const mongoose = require('mongoose')


mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/Jobs', {
    useNewUrlParser: true
}
)

const User = mongoose.model('User', {
    name: String,
    email: String,
    mobile: Number,
    gender: String,
    age: Number,
    username: String,
    password: String
})

const Job = mongoose.model('Job', {
    jobname: String,
    description: String,
    place: String,
    time: String,
    company: String,
    number: Number


})





module.exports = { User, Job }