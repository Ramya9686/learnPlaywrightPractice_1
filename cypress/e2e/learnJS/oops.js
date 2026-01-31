// class

// class student {
//     a = 10;

//     firstStd() {
//         console.log('Hetveer');
//     }

//     secndStd() {
//         console.log('Ammu');
//     }
// }

// const primarySchool = new student()
// primarySchool.firstStd()
// console.log(primarySchool.a)
// primarySchool.secndStd()

// class calculator {
//     add(num1, num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1+num2)
//     }

//     substraction(num1, num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1-num2)
//     }

//     multiply(num1, num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1*num2)
//     }


//     devide(num1, num2){
//         console.log(num1)
//         console.log(num2)
//         console.log(num1/num2)
//     }
// }

// const maths = new calculator ()
// maths.add(10,2)
// maths.substraction(16,2)
// maths.multiply(10,5)
// maths.devide(20,10)

// class students {
//     x = 10
//     y = 60

//     stu1 ='ramya'
// }

// const studentslist = new students()
// console.log(studentslist.x)
// console.log(studentslist.stu1)
// console.log(studentslist.y)

// constructor
// class student {
//     constructor() {
// console.log("Ganesha")
//     }
// }

// const newStudent = new student()

//  class goddess {
//     constructor() {
// console.log("Ganesha")
//     }
    
// }
// const godNames = new goddess()

// class hetveerDetails {
//     bithDetails(place, hospital){
// console.log( "birthPlace:" + place)
// console.log( "hospitalName:" + hospital)
//     }
// }
//     const details = new hetveerDetails
// details.bithDetails("bangalore", "Apollo")

//If used Constructor
// class hetveerDetails {
//     constructor(place, hospital){
// console.log( "birthPlace:" + place)
// console.log( "hospitalName:" + hospital)
//     }
// }
//     const details = new hetveerDetails("bangalore", "Apollo")

// this - keyword

// class employees {
//     emp1 (){
//         console.log("Yamuna 1")
//         this.emp2()
//         this.emp3()
//     }
//     emp2 (){
//         console.log("Ramya 2")
//          this.emp3()
//     }
//     emp3 (){
//         console.log("Santhu 3")
         
//     }
// }

// const ABCComapany = new employees()
// //ABCComapany.emp1()
//  ABCComapany.emp2()
// ABCComapany.emp3()

//hoisting in JS
// maths()

// function maths() {
//     console.log(6+5)
// }

// static

// class calculator{
//     static a = 60

//     static add (){
//         console.log(10+5)
//     }
//     multiply(){
//         console.log(5*5)
//     }
// }
// const maths = new calculator
// console.log(calculator.a)
// calculator.add()
// maths.multiply()

//1. encapsulation

// class calculator{
    
//      constructor (num1, num2){
//         this.num1 = num1
//         this.num2 = num2
//     }
//     add(){
//         console.log(this.num1+this.num2)
//     }

//     value(){
//         console.log(5*5)
//     }
// }

// const maths = new calculator(10,20)
// maths.add()
// maths.value()

// class calcy {
//     constructor(n1, n2) {
//         this.n1 = n1 
//         this.n2 = n2
//     }

//     devide () {
//         console.log(this.n1 / this.n2)
//     }
// }

// const calculator = new calcy(100, 10)
// calculator.devide()

//2. Inheritance
 
// class A {
//     add (n1, n2){
//         console.log(n1)
//         console.log(n2)
//         console.log(n1+n2)
//     }
// }
// class B extends A {
//     multiply (n1, n2){
//         console.log(n1)
//         console.log(n2)
//         console.log(n1*n2)
//     }
// }

// const C = new B ()
// C.multiply(100, 10)
// C.add(5,7)

//3. polymorphisim

// class A {
//     dispayMessage(){
//         console.log('this is a parent class')
//     }
// }

// class B extends A {
//     dispayMessage() {
//         console.log('this is a child class')
//     }
// }

// const obj1 = new B()
// obj1.dispayMessage()


//4. prototype

// class A {
//     stu = 'shiva'

//     emp1 () {
//         console.log("name 1")
//     }

//     emp2 () {
//         console.log("name 2")
//     }

//     emp3 () {
//         console.log("name 3")
//     }
// }

// A.prototype.stu2 = "Naveen"
// A.prototype.emp4 = function (){
// console.log("name 4")
// }

// const obj1 = new A
// console.log(obj1.stu)
// console.log(obj1.stu2)
// obj1.emp1()
// obj1.emp4()