//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a4a80c9aec654205899f950')},
  {
    $set :{
      completed: false,
      text: 'study Math 01'
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  client.close();
});
