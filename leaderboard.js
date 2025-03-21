// Leaderboard
// მოცემული გვაქვს იგივე ობიექტი.
// თქვენი დავალებაა შექმნათ Leaderboard.
// ცვლადში ჩაყარეთ სტუდენტების ID ები მათი ქულების მიხედვით:
// სადაც 0 ინდექსზე მოხვდება ტოპ, ყველაზე მაღალ ქულიანი სტუდენტის ID,
// ხოლო ბოლო ინდექსზე ყველაზე ზარმაცი სტუდენტის ID.
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

// ლოგიკა:

// 1️⃣ მენტორებზე გადარბენა
// 2️⃣ მენტორების სტუდენტებზე გადარბენა
        // ამოვიღე სტუდენტების აიდები
        // შევქმენი  ცვლადი სადაც ვინახავ სტუდენტების  ყველა ქულას.
        // შევქმენი ახალი არაი სადაც შევინახე სტუდენტების ქულები
// 4️⃣  გავაკთო მესამე ფორი სადაც გადავირბენ სტუდენტების ქულებზე და დავალაგები კლებადობის მიხედვით
            

// სტუდენტების მასივი, სადაც თითოეული სტუდენტის ქულა იქნება შენახული.
//  მასივი უნდა დავალაგოთ ქულების მიხედვით (დიდიდან პატარამდე).
//  მასივიდან მხოლოდ სტუდენტების id-ები უნდა დავაბრუნოთ.



  
let wallOfFame = []; 

for(let i = 0; i < mentors.length; i++){
    // console.log(`mentors : ${mentors[i].id}`) // მენტორების ID  ამოღება; 
    let students =  mentors[i].students; 
    for(let j = 0; j < students.length; j++){
        //console.log(`students : ${students[j].firstName} ${students[j].lastName}`); //  სტუდენტების  სახელი და გვარები
        // console.log(`studets ID : ${students[j].id}`);
        let studentesAllscore =  students[j].allScores; // ვინახავ სტუდენტების  ყველა ქულებს 
        let stutentScoreArray = [...studentesAllscore]  // ვინახავ სტუდენტების ქულებს მასივებად
        // console.log(stutentScoreArray);

        let totalScore = 0;
        for (let k = 0; k < studentesAllscore.length; k++) {
            totalScore += studentesAllscore[k]; // ვამატებთ თითოეულ ქულას
        }
        students[j].totalScore = totalScore;
        // console.log(totalScore);
        
        wallOfFame.push({ id: students[j].id, score: totalScore }); // ვამატებთ ობიექტს, სადაც არის სტუდენტის ID და მისი ჯამური ქულა
    }
}

 
for (let i = 0; i < wallOfFame.length - 1; i++) {
    for (let j = i + 1; j < wallOfFame.length; j++) {
        if (wallOfFame[i].score < wallOfFame[j].score) {
            let change = wallOfFame[i];
            wallOfFame[i] = wallOfFame[j];
            wallOfFame[j] = change;
        }
    }
}

wallOfFame = wallOfFame.map(student => student.id);

console.log("Leaderboard:", wallOfFame);
 
 