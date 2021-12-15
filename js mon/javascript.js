// constants 

const pi = 3.141593
console.log(pi > 3.0)


//scoping
//Block-scoped variables

// for (let i=0;i<a.length;i++){
// 	let x = a[i]
// }

// for (let i=0;i<b.length;i++){
// 	let y = b[i]
// }

// let callbacks = []

// for (let i=0;i<=2;i++){
// 	callbacks[i]= function() {return i * 2}
// }

// callbacks[0]() === 0
// callbacks[1]() === 2
// callbacks[2]() === 3

// console.log(callbacks)



//blocked-scope functions

{
	function foo() {return 6}
	foo() === 1
	{
	function foo() {return 2}
	foo() === 2
	}
	foo () === 1
}

console.log(foo())



//Arrow functions

//Expression Bodies

// var odds = evens.map(v => v + 1);
// var nums = evens.map((v, i) => v + i);
// var pairs = evens.map(v => ({even: v, odd: v + 1}));

// console.log()



// var nums.forEach(v => {
//    if (v % 5 === 0)
//        fives.push(v)
// })

// console.log(fives.push(v))



//Extended parameter Handling 


function f (x, y = 7, z = 42) {
    return x + y + z
}


console.log(f(1) === 50)


//rest parameter 

function f (x, y, ...a) {
    return (x + y) * a.length
}


console.log(f(1, 2, "hello", true, 7) === 9)


//spread operator 

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]

console.log(f(1, 2, ...params) === 9)

//Template Literals

//string interpolation

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for 
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)

//raw string access

function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux`foo\n${ 42 }bar`

console.log(String.raw`foo\n${ 42 }bar` === "foo\\n42bar")


//Extended literals

//binary and octal literals


console.log(0b111110111 === 503)
console.log(0o767 === 503)

//Unicode String & RegExp Literal


"𠮷".length === 2
"𠮷".match(/./u)[0].length === 2
"𠮷" === "\uD842\uDFB7"
"𠮷" === "\u{20BB7}"
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint)



//Enhacned object properties
//property shorthand

var x = 1,y = 3
obj ={x,y}

console.log(obj)