// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() last value remove kar deta hai

// myArr.unshift(9) value ko start me add kar deta hai
// myArr.shift()   mfirst value remove kar deta hai

// console.log(myArr.includes(9));  que puchne ke 9 hain ya nahi
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  string me convert kr deta hai  

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);