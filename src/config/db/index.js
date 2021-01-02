const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_express_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully')
    }
    catch(err){
        console.log('Connect Failure')
    }
}

module.exports = { connect }
