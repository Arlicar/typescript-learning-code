// 声明一个变量a,同时指定它的类型为number
let a: number;

// a的类型设置为了number，在以后的使用过程中a的值只能是数字。
a = 10;
// a = 'hello';这样是错的。因为a的类型是number，不能赋值字符串。、
let b: string;

b = 'hello word';

// 申明完变量就直接赋值
let c: boolean = true

// 如果不声明和赋值同时进行，TS可以自行判断其类型
let d = "kito"
// d = 错误

//可以给参数和返回值定义类型
function sum(a: number, b: number): number {
    return a + b
}

let result = sum(123, 456)