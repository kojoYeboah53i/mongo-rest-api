const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kojoyeboah53i:<password>@cluster0.2fm1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});