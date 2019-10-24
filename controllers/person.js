const Person = require('../models/person');

const persons = [
   {
      name: 'ljuba',
      age: 37,
      male: true
   },
   {
      name: 'joca',
      age: 38,
      male: true
   },
   {
      name: 'jasna',
      age: 44,
      male: false
   },
]

exports.getPersons = (req, res, next) => {
   Person.find()
   .then(personsFromMongo => {
      res.status(200).json({
         message: 'Fetched persons!!!',
         persons: personsFromMongo
      });
   })
   .catch(err => console.log(err));
};

exports.addPerson = (req, res, next) => {
   const person = new Person({
      name: persons[0].name,
      age: persons[0].age,
      male: persons[0].male
   });
   person.save()
   .then(result => {
      res.status(201).json({
         message: 'Person created successfully!',
         person: result
      });
   })
   .catch(err => {
      console.log(err);
   });
}