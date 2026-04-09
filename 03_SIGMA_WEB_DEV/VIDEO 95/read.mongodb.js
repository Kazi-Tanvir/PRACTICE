use('crudDB');

let courses = db.courses.find().toArray();
console.log('Courses in the database:',courses);
db.courses.find({credits:4});
