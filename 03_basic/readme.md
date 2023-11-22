types of funtion decleration in javascript

In JavaScript, there are a few ways to declare functions. Here are the main types:

1. Function Declaration:

 function greet() {
    return "Hello!";
} 

Hoisted: Function declarations are hoisted, meaning they're available anywhere in the scope they're declared in, even before the actual declaration.

2. Function Expression:

 const greet = function() {
    return "Hello!";
};

Anonymous Function: Here, the function doesn’t have a name and is assigned to a variable. It's not hoisted like function declarations.

3. Arrow Function:
const greet = () => { 
    return "Hello!";
};

Concise Syntax: Arrow functions provide a more concise way to write functions, especially for one-liners.
Lexical this: They also handle the this keyword differently compared to regular functions.

4. Function Constructor (Rarely Used):

const greet = new Function('return "Hello!"'); 

Creates Function Object: Constructs a function object but is less common due to security implications and inefficiency.
Each type has its own use case. Function declarations and expressions are commonly used, while arrow functions are preferred for their concise syntax in certain situations. The choice often depends on readability, scope, and functional requirements.