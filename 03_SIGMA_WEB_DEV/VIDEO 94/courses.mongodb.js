// Select the database to use.
use('Sigma');

// Insert dummy data into the courses collection.
db.getCollection('courses').insertMany([
  {
    name: 'Java',
    price: NumberInt('20000'),
    instructor: 'Harry'
  },
  {
    name: 'Python Masterclass',
    price: NumberInt('15000'),
    instructor: 'Angela'
  },
  {
    name: 'MERN Stack Development',
    price: NumberInt('25000'),
    instructor: 'Harry'
  },
  {
    name: 'C++ for Beginners',
    price: NumberInt('12000'),
    instructor: 'Stroustrup'
  },
  {
    name: 'Data Science with R',
    price: NumberInt('18000'),
    instructor: 'Shubham'
  },
  {
    name: 'JavaScript Deep Dive',
    price: NumberInt('22000'),
    instructor: 'Hitesh'
  },
  {
    name: 'Rust Systems Programming',
    price: NumberInt('30000'),
    instructor: 'Ferris'
  },
  {
    name: 'Go Programming',
    price: NumberInt('17000'),
    instructor: 'Ken'
  }
]);

// Helper to count how many courses are currently in the collection
const courseCount = db.getCollection('courses').countDocuments();

// Print a message to the output window.
console.log(`Success! You now have ${courseCount} courses in the Sigma database.`);