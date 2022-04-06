/*
OBJECT
*/
/*
Mokiniai:
-mokinys (??)
    -vardas (string),
    -pazymiai (array),
    -kontaktiniai asmeni(??)
        -varda (string),
        -tel. nr (number)
        */
// poss example 1
        // const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];
        // const marks = [[10, 8], [10, 7, 4], [10, 6], [10, 5]];
        // const contactName = ['P.P.', 'M.M.', 'J.J.', 'O.O.']
        // const contactPhone = [111, 222, 333, 444]
        // console.log(students);

        // const studentIndex = 1;
        // console.log('Vardas:', students[studentIndex]);
        // console.log('Pazymiai:', marks[studentIndex]);
// poss example 2
//         const students = [
//             ['Petras', [10, 6], ['P.P.', 111]],
//             ['Maryte', [10, 7], ['M.M.', 222]],
//             ['Jonas', [10, 8, 6], ['J.J.', 333]],
//             ['Ona', [10, 9], ['O.O.', 444]],
//         ];

//         const index = 2;
//         const student = students[index];
//         const studentName = student[0];
//         const studentMarks = student[1];
//         const studentContactPerson = student[2];
//         const contactName = studentContactPerson[0];
//         const contactPhone = studentContactPerson[1];

// console.log(studentName);
// console.log(studentMarks);
// console.log(studentContactPerson);
// console.log(contactName);
// console.log(contactPhone);

const students = [
    {
        name: 'Petras', 
        marks: [10, 6], 
        contact: {
            name:'P.P.', 
            phone: 111
        },
    },
    {
        name: 'Maryte', 
        marks: [10, 8, 6], 
        contact: {
            name:'M.M.', 
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 1;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contact = student['contact'];
const contactName = contact['name'];
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;

console.log(name);
console.log(marks);
console.log(contact);
console.log(contactName);
console.log(contactPhone);
