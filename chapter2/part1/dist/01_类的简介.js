"use strict";
//使用class关键字来定义一个类
class Person {
    constructor() {
        //定义属性
        this.name = '孙悟空';
        //readonly 表示只读属性,无法修改
        this.gender = 'male';
    }
    //加static变成类方法
    sayHello() {
        console.log("sayHello");
    }
}
//在属性前使用static关键字可以定义类属性（静态属性）,可以直接访问
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name, Person.age);
per.name = "猪八戒";
console.log(per.name);
per.sayHello();
