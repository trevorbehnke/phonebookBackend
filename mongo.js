if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const name = process.argv[3];

const number = process.argv[4];

// const person = new Person({
//   name: `${name}`,
//   number: `${number}`,
// });

// person.save().then((result) => {
//   console.log(`added ${name} number ${number} to phonebook`);
//   mongoose.connection.close();
// });

console.log("I'm printing a list of information from the db!");
Person.find({}).then((result) => {
  result.forEach((person) => {
    console.log(person);
  });
  mongoose.connection.close();
  process.exit(1);
});
