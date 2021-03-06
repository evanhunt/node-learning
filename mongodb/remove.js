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

const removeDocument = function(db, callback) {
    const collection = db.collection('documents');

    collection.deleteOne({a: 3}, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log('Updated the document with the field a equal to 2');
        console.log(result);
        callback(result);
    });
};

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    insertDocuments(db, function() {
        removeDocument(db, function() {
            client.close();
        });
    });
});
