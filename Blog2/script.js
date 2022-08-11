// Read the explanation below:

// 3 + '4'
// Explanation:

// 3 + '4' in this code first value 3 is a Number data type and '4' is a String. Because both values are not same implicit type conversion will happen to bring both the value in the same data type. So number will be converted to string because + operator can be used from both concatenation and addition. In this case 3 (number) will be converted to "3" (string). Now the value is "3" and "4" so it will be concatenated. The output will be "34".

// Similarly write the explanation of how this conversion will happen. And what will be the output.

// 1 + "2"
let convert = String(1) + "2";
console.log(convert);
console.log(typeof convert)
'12'

// 30 * "3"
90


// 100 + '10' + 15
let convert3 = String(30) + '10' + String(15);
console.log(convert3);
console.log(typeof convert3)
'1001015'


// What will be the output of the following:
// Number("6") // output
  6

// Number("6.76")
6.67


// Number(" 6.76 ")
6.76 

// String(456)
'456'

// String(1.25)
'1.25'

// String(10+20)
// let converting = String(10+20)
// console.log(converting)
// console.log(typeof converting)
'30'

// Boolean(1)
 true

// Boolean(0)
false

// Boolean(-5)
true

// Number(true)
1

// Number(false)
0

// Number("")
0

// Number(" ")
0


// What will be the output of the following:
// 5 * "1005" // output
5025

// "6" + "7"
'67'
// "1" + 100 + 10
'110010'


// 1 * "5" + 100
let sume = 1 * "5";
console.log(sume)
console.log(typeof sume)
let sum = (sume + 100);
console.log(sum)
console.log(typeof sum)
// Number 105


// 5 + "45" + 200 + 2000
"5452002000"

// 6 - "2"
  4


// 7 - "31"
-24