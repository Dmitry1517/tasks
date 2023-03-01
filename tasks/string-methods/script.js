import { stringToUpperCase, getCorrectSpace, howManyWords, CounterWords } from './stringMethods.js'

console.log(stringToUpperCase('дИМа'));

console.log(getCorrectSpace('Вот пример строки,в которой   используются знаки препинания. После знаков должны строять пробелы , после знаков их быть не должно .  Если есть      подряд идущие пробелы, они должны быть устранены'));

console.log(howManyWords('Сколько здесь слов, посчитай, пожалуйста'));

let counter = new CounterWords('Текст, в котором слово текст несколько раз встречается и слово тоже');
counter.render();
