//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'This is a new record`',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // Insert new doc into the Users collection.
    // db.collection('Users').insertOne({
    //     name: 'Christopher Spraggett',
    //     age: 38,
    //     location: 'Toronto'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });


    client.close();
});

