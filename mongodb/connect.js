const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'data';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
});
