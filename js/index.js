// 2. Реализовать классы Художник и Картина. Каждому прописать необходимые поля.
// Используя статические поля (методы) подсчитать количество картин и художников.
// Продумать методы вывода информации о картине и художнике (по отдельности)

class Painter {
    constructor(painterName, country, images) {
        this.painterName = painterName;
        this.country = country;
        this.images = images;
    }
    get imagesCount () {
        return this.images.length;
    }
    set addImage (newImage) {
        return this.images = [...this.images, newImage];
    }
}
class Image {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const square = new Image('Square', 1860);
const circle = new Image('Circle', 1999);

const Lysenko = new Painter('Jenya', 'Kazantip', [square]);
const Denis = new Painter('Denis', 'Baburka', []);
console.log(Lysenko.imagesCount)

//1.Реализовать класс RangeValidator, со следующими свойствами:
//    ■  from (number);
//    ■  to (number);
//Реализовать getter'ы и setter'ы для обоих свойств
//Реализовать getter range, который будет возвращать массив с двумя числами диапазона
//Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    get getTo() {
        return this.to;
    }

    set setTo (to) {
        this.to = to;
    }

    get getFrom() {
        return this.from;
    }

    set setFrom (from) {
        this.from = from;
    }

    validate(number) {
        return number >= this.from && number <= this.to;
    }
}
const range = new RangeValidator(10, 20);
console.log(range.validate(15));
console.log(range.validate(22));





