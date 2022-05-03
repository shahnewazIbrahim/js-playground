class Student {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} eating too much`;
    }
    promo() {
        return this.eat();
    }
}

let obj = new Student();
obj.name = "df";
obj.age = 9;
obj.nothing = "nothing";

console.log(obj.object);