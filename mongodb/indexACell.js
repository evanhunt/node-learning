const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'data';

const insertDocuments = function(db, callback) {
    const collection = db.collection('documents');

    collection.insertMany([
        {a: 1}, {a: 2}, {a: 3},
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        callback(result)
    });
}

const indexCollection = function(db, callback) {
    db.collection('documents').createIndex(
        {'a': 1},
        null,
        function(err, result) {
            console.log(result);
            callback();
        },
    )
};

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    insertDocuments(db, function() {
        indexCollection(db, function() {
            client.close();
        });
    });
});
