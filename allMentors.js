// ყველა მენტორის ყველა სტუდენტი
// მოცემული გვაქვს მენტორების მასივი (array), სადაც თითოეული მენტორი წარმოდგენილია როგორც ობიექტი (object).

// ამ ობიექტში ერთერთი property არის სტუდენტების მასივი (array), სადაც თითოეული სტუდენტი წარმოდგენილია როგორც ობიექტი (object).

// თქვენი საქმეა ამოკრიბოთ ყველა მენტორის ყველა სტუდენტის სახელები და გვარები და ჩაწეროთ მასივში:

const mentors = [
    {
      firstName: 'მიშა',
      lastName: 'ფაილოძე',
      course: 'კომპიუტერული მეცნიერება',
      students: [
        {
          firstName: 'გიგო',
          lastName: 'მენაბდე'
        },
        {
          firstName: 'გოგი',
          lastName: 'ჩანტლაძე'
        },
        {
          firstName: 'ნინო',
          lastName: 'მაისურაძე'
        },
        {
          firstName: 'ლუკა',
          lastName: 'რამაზაშვილი'
        },
        {
          firstName: 'მარიამ',
          lastName: 'მარტყოფელი'
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
          lastName: 'გიგაშვილი'
        },
        {
          firstName: 'ნანიკო',
          lastName: 'ჯამასპიშვილი'
        },
        {
          firstName: 'სალომე',
          lastName: 'ნაჭყებია'
        },
        {
          firstName: 'მათე',
          lastName: 'მარკოზაშვილი'
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
          lastName: 'დვალი'
        },
        {
          firstName: 'მარიამ',
          lastName: 'ლოსაბერიძე'
        },
        {
          firstName: 'ლევან',
          lastName: 'სართანია'
        },
        {
          firstName: 'ბექა',
          lastName: 'ურუშაძე'
        },
        {
          firstName: 'სესილი',
          lastName: 'სისაშვილი'
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
          lastName: 'ფაღავა'
        },
        {
          firstName: 'სოსო',
          lastName: 'მიქაბერიძე'
        },
        {
          firstName: 'ირაკლი',
          lastName: 'ჩარკვიანი'
        },
        {
          firstName: 'ნიკა',
          lastName: 'გვარამია'
        },
        {
          firstName: 'რიტა',
          lastName: 'რატიანი'
        }
      ]
    }
];

let allStudents = [];

for(let i = 0; i < mentors.length; i ++){
    // console.log(mentors[i]);
    let students =  mentors[i].students

    for (let j = 0; j < students.length; j++) {
        let studentsInfo = `${students[j].firstName} ${students[j].lastName}`; 
        allStudents.push(studentsInfo); 
    }
    
}

console.log(allStudents);


 

 