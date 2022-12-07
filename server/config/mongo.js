const { MongoClient } = require("mongodb");
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://pascal29:${password}@cluster0.ox1f0vi.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
let db = null;

async function mongoConnect() {
  try {
    db = client.db("tes-universal-eco");

    return db;
  } catch (error) {
    return error;
  }
}

function getDB() {
  return db;
}

module.exports = { mongoConnect, getDB };
