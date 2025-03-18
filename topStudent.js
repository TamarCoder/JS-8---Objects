const mentors = [
    {
        id: 100,
        firstName: 'მიშა',
        lastName: 'ფაილოძე',
        course: 'კომპიუტერული მეცნიერება',
        students: [
            {
                id: 1,
                firstName: 'გიგო',
                lastName: 'მენაბდე',
                allScores: [11, 3, 3, 4, 1, 0, 5, 6]
            },
            {
                id: 2,
                firstName: 'გოგი',
                lastName: 'ჩანტლაძე',
                allScores: [0, 1, 1, 11, 10]
            },
            {
                id: 3,
                firstName: 'ნინო',
                lastName: 'მაისურაძე',
                allScores: [3, 1, 9]
            },
            {
                id: 4,
                firstName: 'ლუკა',
                lastName: 'რამაზაშვილი',
                allScores: [10, 10, 15, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 5,
                firstName: 'მარიამ',
                lastName: 'მარტყოფელი',
                allScores: [10, 10, 15, 5, 6, 3, 3, 10, 3, 7, 5]
            }
        ]
    },
    {
        id: 200,
        firstName: 'გიო',
        lastName: 'მათიაშვილი',
        course: 'ციფრული დიზაინი',
        students: [
            {
                id: 6,
                firstName: 'რატი',
                lastName: 'გიგაშვილი',
                allScores: [6, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 7,
                firstName: 'ნანიკო',
                lastName: 'ჯამასპიშვილი',
                allScores: [10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 8,
                firstName: 'სალომე',
                lastName: 'ნაჭყებია',
                allScores: [3, 10, 3, 10, 5]
            },
            {
                id: 9,
                firstName: 'მათე',
                lastName: 'მარკოზაშვილი',
                allScores: [5, 15, 7, 5, 15, 10, 5, 6, 3, 10, 10, 3, 10, 3, 10]
            }
        ]
    },
    {
        id: 300,
        firstName: 'ანა',
        lastName: 'იაქაშვილი',
        course: 'Career Development',
        students: [
            {
                id: 10,
                firstName: 'გია',
                lastName: 'დვალი',
                allScores: [10, 5, 6, 3, 7, 5, 10, 10, 15, 10, 3]
            },
            {
                id: 11,
                firstName: 'მარიამ',
                lastName: 'ლოსაბერიძე',
                allScores: [10, 10, 3, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 12,
                firstName: 'ლევან',
                lastName: 'სართანია',
                allScores: [1, 10, 5, 6, 10, 10, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 13,
                firstName: 'ბექა',
                lastName: 'ურუშაძე',
                allScores: [3, 10, 5, 15, 7, 5]
            },
            {
                id: 14,
                firstName: 'სესილი',
                lastName: 'სისაშვილი',
                allScores: [15, 10, 5, 6, 10, 10, 3, 10, 7, 5]
            }
        ]
    },
    {
        id: 400,
        firstName: 'ლიკა',
        lastName: 'გოგოლაძე',
        course: 'English Club',
        students: [
            {
                id: 15,
                firstName: 'ზაზა',
                lastName: 'ფაღავა',
                allScores: [5, 15, 7, 5]
            },
            {
                id: 16,
                firstName: 'სოსო',
                lastName: 'მიქაბერიძე',
                allScores: [5]
            },
            {
                id: 17,
                firstName: 'ირაკლი',
                lastName: 'ჩარკვიანი',
                allScores: [6, 10, 10, 3, 10, 5, 10, 15, 20, 25]
            },
            {
                id: 18,
                firstName: 'ნიკა',
                lastName: 'გვარამია',
                allScores: [6, 3, 10, 3, 10, 5, 10, 15, 20, 25]
            },
            {
                id: 19,
                firstName: 'რიტა',
                lastName: 'რატიანი',
                allScores: [10, 10, 15, 10, 5, 3, 10, 5, 15, 7, 5]
            }
        ]
    }
];

// პირველი ლუპი – გადავუვლით მენტორებს.
// მეორე ლუპი – გადავუვლით თითოეული მენტორის სტუდენტებს.
// ქულების გამოთვლა – სტუდენტის allScores მასივის ჯამს გამოვითვლით და შევინახავთ.
// შედარება – შევადარებთ მიმდინარე მაქსიმალურ ქულას და თუ ახალი სტუდენტი უკეთესია, შევინახავთ.

let maxScore = 0; 
let topMentorId;
let topStudentId;
for (let i = 0; i < mentors.length; i++) { // მენტორების ციკლი 
    // console.log(`mentor: ${mentors[i].id}`); 
    let students = mentors[i].students;
 
    for (let j = 0; j < students.length; j++) { // სტუდენტების ციკლი
    //    console.log(`student: ${students[j].id}`);
       let allScores = students[j].allScores;
 
       let studentSum = 0;  
 
       for (let y = 0; y < allScores.length; y++) { // ქულებზე გადარბენის ციკლი
           studentSum += allScores[y]; 
       }
 
       if (studentSum > maxScore) {
        maxScore = studentSum;
        topMentorId = mentors[i].id;  // ვინ არის მენტორი
        topStudentId = students[j].id; // ვინ არის სტუდენტი
    }

    // console.log(`Total score: ${studentSum}`);
    //    console.log(`Student ${students[j].id} total score: ${studentSum}`);
    }
}

console.log(`Top Mentor ID: ${topMentorId}`);
console.log(`Top Student ID: ${topStudentId}`);
console.log(`Highest Score: ${maxScore}`);
