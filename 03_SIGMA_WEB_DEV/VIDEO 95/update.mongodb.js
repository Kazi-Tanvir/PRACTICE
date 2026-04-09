use('crudDB');

db.courses.updateMany(
    { credits: 3 },
    { $set: { credits: 4 } }
);
