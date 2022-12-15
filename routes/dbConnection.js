const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://student:student@cluster0.s7tgpof.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function connect() {
    try {
        const connection = await client.connect();
        await listDatabases(client);
    } catch (error) {
        console.error(e);
    }
}

async function closeConnection() {
    await client.close();
}

// main().catch(console.error);
// closeConnection().catch(console.error);
module.exports = { connect, closeConnection };