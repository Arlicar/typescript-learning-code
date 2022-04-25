"use strict";
// 立即执行函数，避免了变量名的冲突
(function () {
    //前带有abstract为抽象类，不能被创建对象，只能被继承
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log('动物在叫');
        }
    }
    // 继承
    class Dog extends Animal {
        //重写
        bark() {
            console.log(`${this.name}在叫`);
        }
    }
    // super的使用
    class Cat extends Animal {
        constructor(name, age, sex) {
            super(name, age);
            this.sex = sex;
        }
        bark() {
            super.bark();
        }
    }
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("hhh");
        }
    }
    //其他有关的属性和java也很像。
})();
