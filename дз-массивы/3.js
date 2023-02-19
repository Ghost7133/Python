const students = ["Попов", "Радюгин","Гысев" ,"Юдин" ,"Бирюков"]
const grade = [30, 67, 78, 81, 83]
let i = 0
while (students[i] != undefined) {
    console.log(students[i],grade[i]);
        if (grade[i] <= 60) {
        console.log("f");
        } else if (grade[i] > 60 & grade[i] < 70) {
            console.log("d");
        } else if (grade[i] > 70 & grade[i] < 80) {
            console.log("c");
        } else if (grade[i] > 80 & grade[i] < 90) {
            console.log("b");
        } else if (grade[i] > 90 & grade[i] < 100) {
            console.log("a");
        }
        i++   
    }
const sum = grade.reduce((acc, grade) => acc + grade);
let avg = sum / grade.length
if (avg <= 60) {
    console.log("f");
    } else if (avg >= 60 & avg <= 70) {
        console.log("d");
    } else if (avg >= 70 & avg <= 80) {
        console.log("c");
    } else if (avg >= 80 & avg <= 90) {
        console.log("b");
    } else if (avg => 90 & avg <= 100) {
        console.log("a");
    }
 
