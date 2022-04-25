// 立即执行函数，避免了变量名的冲突
(function () {
    //前带有abstract为抽象类，不能被创建对象，只能被继承
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        bark() {
            console.log('动物在叫');
        }

        // 用abstract定义一个抽象方法，只能定义在抽象类中,无方法体,并且子类必须重写
        // abstract hoho(): void;
    }

    // 继承
    class Dog extends Animal {
        //重写
        bark(): void {
            console.log(`${this.name}在叫`);
        }

    }
    // super的使用
    class Cat extends Animal {
        sex: string;
        constructor(name: string, age: number, sex: string) {
            super(name, age);
            this.sex = sex;
        }
        bark(): void {
            super.bark()
        }
    }


    /*
    接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
        同时接口也可以当成类型声明去使用
    */
    interface myInterface {
        name: string;
        sayHello(): void;
    }

    class myClass implements myInterface {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(): void {
            console.log("hhh")
        }
    }

    //其他有关的属性和java也很像。
}
)();