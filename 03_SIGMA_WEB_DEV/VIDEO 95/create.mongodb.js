use('crudDB');

db.createCollection('courses');

db.courses.insertMany([
    {
        name: 'Mathematics',
        code: 'MATH101',
        credits: 3,
        instructor: 'Dr. Smith',
        schedule: 'Mon/Wed/Fri 10:00-11:00',
        studentsEnrolled: 30
    },

    {
        name: 'Computer Science',
        code: 'CS101',
        credits: 4,
        instructor: 'Dr. Johnson',
        schedule: 'Tue/Thu 14:00-15:30',
        studentsEnrolled: 25
    },
    {

        name: 'History',
        code: 'HIST101',
        credits: 3,
        instructor: 'Dr. Brown',
        schedule: 'Mon/Wed 13:00-14:30',
        studentsEnrolled: 20
    },
    {
        name: 'Physics',
        code: 'PHYS101',
        credits: 4,
        instructor: 'Dr. Davis',
        schedule: 'Tue/Thu 10:00-11:30',
        studentsEnrolled: 28
    },]);


    db.courses.insertOne({
        name: 'Chemistry',
        code: 'CHEM101',  
        credits: 4,
        instructor: 'Dr. Wilson',
        schedule: 'Mon/Wed/Fri 14:00-15:00',
        studentsEnrolled: 22
    });

    let coursecount = db.courses.countDocuments();

    console.log('Courses collection created and documents inserted successfully.'); 
    console.log(`Total courses: ${coursecount}`);