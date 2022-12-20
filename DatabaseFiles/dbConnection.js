const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://student:student@cluster0.s7tgpof.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        db = await client.db("MainDatabase");
        console.log('Database connection successfull');
    } catch (error) {
        console.error(e);
    }
}

const submitForm = (payload) => {
    return db.collection('UserData').insertOne(payload).then((res) => {
        return res;
    }).catch((error) => {
        console.log('Error in Submitting Form', error);
    });
}

const getAllData = async () => {
    const arr = [];
    await db.collection('UserData').find({ "_id": { $ne: null } }).forEach(el=>arr.push(el));
    return arr;
}

async function closeConnection() {
    await client.close();
}

module.exports = { connect, closeConnection, submitForm, getAllData };