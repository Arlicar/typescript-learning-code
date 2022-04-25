//object表示一个对象
let example_05: object;
//{}用来指定对象中可以包含哪些属性
//语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上一个？，表示属性可选
let example_06: { name: string, age?: number }


//[porpName:string]:any  表示任意类型的属性
let example_07: { name: string, [propName: string]: any }
example_07 = { name: "猪八戒", age: 18, gender: "男" }

/*
设置函数结构的类型声明:
    语法：(形参:类型，形参:类型...)=>返回值
*/
let example_08: (a: number, b: number) => number


// 数组的类型声明
//      类型[]
//      Array<类型>

//string[]表示字符串数组
let example_09: string[];
let example_10: Array<string>;

// 元组就是固定长度的数组

let example_11: [string, string];


//enum 枚举
enum Gender {
    Male = 0,
    Female = 1
}

let i = {
    name: '孙悟空',
    gender: Gender.Male
}
//&表示同时
let j: { name: string } & { age: number }
//类型的别名
type myType = string;
type myType2 = 1 | 2 | 3 | 4 | 5 | 6;
let k: myType2;
k = 3