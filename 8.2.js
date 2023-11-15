// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.


let randomNum = +prompt('Введите любое число');

function primeNumb(randomNum) {
  if (randomNum > 1 && randomNum < 1000) {
    for (let i = 2; i < randomNum; i++) {
      if (randomNum % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть больше 1 и меньше 1000";
  }
}
console.log(primeNumb(randomNum));