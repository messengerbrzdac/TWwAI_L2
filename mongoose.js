const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://messengerbrzdac:34678@cluster0.88709k3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});