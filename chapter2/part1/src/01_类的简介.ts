//使用class关键字来定义一个类
class Person {
    //定义属性
    name: string = '孙悟空';
    //在属性前使用static关键字可以定义类属性（静态属性）,可以直接访问
    static age: number = 18;
    //readonly 表示只读属性,无法修改
    readonly gender: string = 'male';


    //加static变成类方法
    sayHello() {
        console.log("sayHello")
    }


}

const per = new Person();

console.log(per)
console.log(per.name, Person.age)
per.name = "猪八戒"
console.log(per.name)
per.sayHello();