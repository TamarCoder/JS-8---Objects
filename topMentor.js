// მოცემული გვაქვს იგივე მენტორების მასივი, სადაც თითოეულ სტუდენტზე ამჯერად პორტალზე მიღებული ქულების სია არის 
// ხელმისაწვდომი (student-ის ობიექტის allScores ფროფერთიში).

// გამოთვალეთ რომელ სტუდენტს აქვს ყველაზე მაღალი ქულათა ჯამი და ჩაწერეთ მისი მენტორის ID ცვლადში:
 
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
                allScores: [10, 3, 3, 4, 1, 0, 5, 6]
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
                allScores: [10, 10, 18, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
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
                allScores: [10, 10, 15, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 12,
                firstName: 'ლევან',
                lastName: 'სართანია',
                allScores: [15, 10, 25, 6, 10, 10, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
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

 


// გაანალიზოთ მოცემული ამოცანა ეტაპობრივად:

// 1️⃣ მენტორების მასივი – მენტორი შეიცავს სტუდენტების სიას.
// 2️⃣ სტუდენტის ქულების სია – თითოეულ სტუდენტს აქვს allScores მასივი, რომელიც მისი ქულების ჩამონათვალს მოიცავს.
// 3️⃣ ამოცანა – უნდა ვიპოვოთ სტუდენტი, რომლის ქულათა ჯამი ყველაზე მაღალია და მისი მენტორის ID შევინახოთ ცვლადში.

// ⸻

// ანალიზი:

// თითოეულ მენტორზე უნდა გავიაროთ (ლუპი)
// თითოეული მენტორის სტუდენტებზეც უნდა გავიაროთ (ლუპი)
// სტუდენტის allScores-ის ჯამი უნდა გამოვითვალოთ
// უნდა შევადაროთ ჯამი მაქსიმალურ აღმოჩენილ ჯამს
// თუ ახალი მაქსიმუმი ვიპოვეთ, შევინახოთ მისი მენტორის ID


let maxScore = 0; // მაქსიმალური ქულა
let topMentorId; // საუკეთესო მენტორის ID
 
for (let i = 0; i < mentors.length; i++) {
   console.log(`mentor: ${mentors[i].id}`); // მენტორის ID-ს ბეჭდვა
   let students = mentors[i].students;   // ამ მენტორის სტუდენტების სია

   for (let j = 0; j < students.length; j++) {
       console.log(` student: ${students[j].firstName} ${students[j].lastName}`); // სტუდენტის სახელი და გვარი
       
       let studentSum = 0;   // სტუდენტის ქულების ჯამი
       
       for (let y = 0; y < students[j].allScores.length; y++) {  
           studentSum += students[j].allScores[y]; // სტუდენტის თითოეული ქულის დამატება ჯამში
       }

       // თუ მიმდინარე სტუდენტის საერთო ქულა მეტია maxScore-ზე, ვანახლებთ maxScore-ს და topMentorId-ს
       if (studentSum > maxScore) {  
           maxScore = studentSum; 
           topMentorId = mentors[i].id; // ვინახავთ ამ სტუდენტის მენტორის ID-ს
       }

       console.log(`Total score: ${studentSum}`); // სტუდენტის ქულების ჯამი
   }
}

// ვინახავთ საუკეთესო მენტორის ID-ს (ეს შეგიძლია პირდაპირ console.log-ში დაწერო)
let topStudentsMentorId = topMentorId; 

console.log(topStudentsMentorId); // ბეჭდავს იმ მენტორის ID-ს, ვის სტუდენტსაც ყველაზე მაღალი ქულა აქვს
