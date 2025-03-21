// მოცემული გვაქვს 2D მასივი, მისი ზომა ფიქსირებულად 3x3-ზეა:
// const array = [
//   [5, 10, 20],
//   [3, 50, 17],
//   [0, 18, -10]
// ];


// მარცხენა დიაგონალი დავარქვათ 5, 50 და -10 რიცხვების ერთობას.
// მარჯვენა დიაგონალი დავარქვათ 20, 50, 0 რიცხვების ერთობას.
// დათვალეთ დიაგონალების ჯამი და ჩაწერეთ ცვლადში:

// let sumOfDiagonals;

// let mainDiagonalSum = 0;  
// let secondaryDiagonalSum = 0;  

// for (let i = 0; i < array.length; i++) {  
//     mainDiagonalSum += array[i][i];   
//     secondaryDiagonalSum += array[i][array.length - 1 - i];  
// }
 
// sumOfDiagonals = mainDiagonalSum + secondaryDiagonalSum;
// console.log(sumOfDiagonals);



const array2d = [
    [5, 10, 20, 1],
    [3, 50, 17, 2],
    [0, 18, -10, 3],
    [1, 22, 34, 4]
];
let sumOfDiagonals;
let mainDiagonalSum = 0;  
let secondaryDiagonalSum = 0;  

for(let i = 0; i < array2d.length; i ++){
    mainDiagonalSum += array2d[i][i];   
    secondaryDiagonalSum += array2d[i][array2d.length - 1 - i];  
    
}
sumOfDiagonals = mainDiagonalSum + secondaryDiagonalSum;
console.log(sumOfDiagonals);




 
 