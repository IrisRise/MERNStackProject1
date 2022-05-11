const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sri1905:<password>@mddb1.ecf7e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//prod mongodb+srv://<username>:<password>@cluster0.bvgo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority