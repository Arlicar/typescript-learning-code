
class Dog {
    name: string;
    age: number;
    //构造函数
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    bark() {
        alert('汪汪汪！');
    }
}

const dog = new Dog("小黑", 4);
dog.bark()
console.log(dog)