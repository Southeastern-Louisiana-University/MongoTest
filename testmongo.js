const { MongoClient } = require("mongodb");

// The uri string must be the connection string for the database (obtained on Atlas).
const uri = "mongodb+srv://<username>:<password>@zkmdb.cen8f8i.mongodb.net/?retryWrites=true&w=
majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('zkmdb');
    const parts = database.collection('cmps415');

    // Query for a part that has partID '12345'
    const query = { partID: '12345' };
    const part = await parts.findOne(query);

    console.log(part);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
