// ქულების ჯამი
// მოცემული გვაქვს იგივე მენტორების მასივი, 
// სადაც თითოეულ სტუდენტზე ამჯერად პორტალზე მიღებული ქულების სია არის ხელმისაწვდომი 
// (student-ის ობიექტის allScores ფროფერთიში).

//გამოთვალეთ თითოეული სტუდენტის ჯამური ქულა და ჩაწერეთ სტუდენტის ობიექტის totalScore ფროფერთიში.
//ასე, მაგალითად, თუ ახლა სტუდენტის ობიექტი გავს ამას:

// { 
//   firstName: 'გიგო',
//   lastName: 'მენაბდე', 
//   allScores: [10, 3, 3, 4, 1, 0, 5, 6]
// }

// {
//      firstName: 'გიგო',
//      lastName: 'მენაბდე',
//      allScores: [10, 3, 3, 4, 1, 0, 5, 6],
//      totalScore: 32
// }

const mentors = [
    {
      firstName: 'მიშა',
      lastName: 'ფაილოძე',
      course: 'კომპიუტერული მეცნიერება',
      students: [
        {
          firstName: 'გიგო',
          lastName: 'მენაბდე',
          allScores: [10, 3, 3, 4, 1, 0, 5, 6]
        },
        {
          firstName: 'გოგი',
          lastName: 'ჩანტლაძე',
          allScores: [0, 1, 1, 11, 10]
        },
        {
          firstName: 'ნინო',
          lastName: 'მაისურაძე',
          allScores: [3, 1, 9]
        },
        {
          firstName: 'ლუკა',
          lastName: 'რამაზაშვილი',
          allScores: [10, 10, 15, 10, 5, 6, 3 ,10, 3, 10, 3, 10, 5 ,15, 7, 5]
        },
        {
          firstName: 'მარიამ',
          lastName: 'მარტყოფელი',
          allScores: [10, 10, 15, 5, 6, 3, 3, 10, 3, 7, 5]
        }
      ]
    },
    {
      firstName: 'გიო',
      lastName: 'მათიაშვილი',
      course: 'ციფრული დიზაინი',
      students: [
        {
          firstName: 'რატი',
          lastName: 'გიგაშვილი',
          allScores: [6, 3 ,10, 3, 10, 5 ,15, 7, 5]
        },
        {
          firstName: 'ნანიკო',
          lastName: 'ჯამასპიშვილი',
          allScores: [10, 3, 10, 5 ,15, 7, 5]
        },
        {
          firstName: 'სალომე',
          lastName: 'ნაჭყებია',
          allScores: [10, 3, 10, 3, 10, 5]
        },
        {
          firstName: 'მათე',
          lastName: 'მარკოზაშვილი',
          allScores: [5 ,15, 7, 5, 15, 10, 5, 6, 3, 10, 10, 3, 10, 3, 10]
        }
      ]
    },
    {
      firstName: 'ანა',
      lastName: 'იაქაშვილი',
      course: 'Career Development',
      students: [
        {
          firstName: 'გია',
          lastName: 'დვალი',
          allScores: [10, 5, 6, 3, 7, 5, 10, 10, 15, 10, 3]
        },
        {
          firstName: 'მარიამ',
          lastName: 'ლოსაბერიძე',
          allScores: [10, 10, 15, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
        },
        {
          firstName: 'ლევან',
          lastName: 'სართანია',
          allScores: [15, 10, 5, 6, 10, 10, 3 ,10, 3, 10, 3, 10, 5, 15, 7, 5]
        },
        {
          firstName: 'ბექა',
          lastName: 'ურუშაძე',
          allScores: [3, 10, 5, 15, 7, 5]
        },
        {
          firstName: 'სესილი',
          lastName: 'სისაშვილი',
          allScores: [15, 10, 5, 6, 10, 10, 3 ,10, 7, 5]
        }
      ]
    },
    {
      firstName: 'ლიკა',
      lastName: 'გოგოლაძე',
      course: 'English Club',
      students: [
        {
          firstName: 'ზაზა',
          lastName: 'ფაღავა',
          allScores: [5 ,15, 7, 5]
        },
        {
          firstName: 'სოსო',
          lastName: 'მიქაბერიძე',
          allScores: [5]
        },
        {
          firstName: 'ირაკლი',
          lastName: 'ჩარკვიანი',
          allScores: [6, 10, 10, 3 ,10, 5, 10, 15, 20, 25]
        },
        {
          firstName: 'ნიკა',
          lastName: 'გვარამია',
          allScores: [6, 3 ,10, 3, 10, 5, 10, 15, 20, 25]
        },
        {
          firstName: 'რიტა',
          lastName: 'რატიანი',
          allScores: [10, 10, 15, 10, 5, 3, 10, 5 ,15, 7, 5]
        }
      ]
    }
];
 
for (let i = 0; i < mentors.length; i++) {    
    let students = mentors[i].students; 

    for (let j = 0; j < students.length; j++) {
        let studentsAllScore = students[j].allScores; 
        let sum = 0; 

        for (let k = 0; k < studentsAllScore.length; k++) {  
            sum += studentsAllScore[k];  
        }

        students[j].totalScore = sum;  

     
        console.log(`${students[j].firstName} ${students[j].lastName}: ${students[j].totalScore}`);
    }
}

console.log(mentors);