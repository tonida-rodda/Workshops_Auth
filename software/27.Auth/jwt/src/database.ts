import mongo from 'mongoose';

mongo.connect('mongodb://localhost/test', {
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err));