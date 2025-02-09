//1
let input = prompt("Enter a number");
let number = Number(input);

if (isNaN(number)) {
    console.log("Вы ввели не число");
} else if (number > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}

//2

let userDeleted = confirm("Вы уверены что хотите удалить данный файл?");
if (userDeleted) {
    console.log("Файл удален");
 } else {
    console.log("Удаление отменено");
 };

//3

let age = prompt("Введите ваш возраст");

if (age<18) {
    console.log("Вы еще подросток");
} else if (age >18) {
    console.log("Вы молодой взрослый");
} else if (age >30) {
    console.log("Вы взрослый");
} else {
    console.log("Произошла ошибка!")
}

//4

let condition = prompt("Введите число");

let result = (condition % 2 === 0) ? "Четное число":"Нечетное число";
console.log(result)

//5

let day = prompt("Введите день недели");
let answer
switch (day) {
    case "1":
    answer = "Понедельник";
    break;

case "2":
    answer = "Вторник";
    break;

    case "3":
        answer = "Среда";
        break;

        case "4":
    answer = "Четверг";
    break;

    case "5":
    answer = "Пятница";
    break;


    case "6":
    answer = "Суббота";
    break;



    case "7":
    answer = "Воскресенье";
    break;

default:
    answer = "Ошибка! Попробуйте снова";

    
}

console.log(answer)

//6

let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
if (num1 == num2) {
    console.log("Числа равны");
} else if (num1 > num2) {
    console.log("Первое число больше");
} else if (num2 > num1) {
    console.log("Второе число больше");
} 

























