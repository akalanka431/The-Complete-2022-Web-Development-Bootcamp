
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "pretty solid as a fruit."
});

//fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 37
});
person.save();

const kiwi = new Fruit({
  name: "kiwi",
  score: 10,
  review: "The best fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "Kinda sour"
});
const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "Great stuff"
});

Fruit.insertMany([kiwi,orange,banana], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});
// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(fruits);
//   }

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3,result.insertedCount);
    assert.equal(3,Object.keys(result.insertedIds).length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(fruits);
  });
}
