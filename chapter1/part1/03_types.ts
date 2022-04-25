// 也可以直接使用字面量进行类型声明
// 使用|来连接多个类型
let sex: "male" | "female";
sex = "male"
sex = "female"
// sex="hello"报错
let example_01: boolean | number | string;
example_01 = true;
example_01 = 1;

//any可以用任何类型
let example_02: any;
// 声明变量如果不指定类型，那么TS也会自动判断它为any
let example_03;
//any和unknown的区别在于，any给别的变量赋值，也会使其变成any，但是unknown不会。
// unknown实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
let example_04: unknown;
example_04 = "hello";

if (typeof example_04 === "string") {
    example_01 = example_04
}
// 2种类型断言，可以用来告诉解析器变量的实际类型
example_01 = example_04 as string;
example_01 = <string>example_04;