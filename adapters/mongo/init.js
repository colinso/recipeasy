const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'recipeasy';

// Collection Name
const collectionName = 'recipe';

// Create a new MongoClient
const client = new MongoClient(uri);

async function createCollection() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Establish a connection to the database
    const db = client.db(dbName);

    // Create the "story" collection
    await db.createCollection(collectionName);

    console.log(`Collection '${collectionName}' created successfully.`);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to create the collection
createCollection();
