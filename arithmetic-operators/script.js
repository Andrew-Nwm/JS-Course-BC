// Aritmetic operators = operands (values, variables, etc.)
// Operators: +, -, *, /, %
// Example: 2 + 3 = 5

let students = 30;
students = students - 5; // 30 - 5 = 25
students = students + 10; // 25 + 10 = 35
students += 5; // 35 + 5 = 40
students++; // 40 + 1 = 41
students--; // 41 - 1 = 40
students = students * 2; // 40 * 2 = 80
students = students ** 2; // 80 ** 2 = 6400
students = students / 2; // 6400 / 2 = 3200
students = students % 2; // 3200 % 2 = 0 (remainder of division)

//In JavaScript we have operational hierarchy, so we can use parentheses to change the order of operations.
let result = (2 + 3) * 4; // (2 + 3) * 4 = 5 * 4 = 20
result = 2 + 3 * 4; // 2 + (3 * 4) = 2 + 12 = 14
result = 2 + 3 * 4; // 2 + 3 * 4 = 2 + 12 = 14 (multiplication has higher precedence than addition)
result = 2 + 3 - 4; // 2 + 3 - 4 = 5 - 4 = 1 (addition and subtraction have the same precedence, so they are evaluated from left to right)
result = 2 * 3 + 4; // 2 * 3 + 4 = 6 + 4 = 10 (multiplication has higher precedence than addition)
result = 2 * 3 - 4; // 2 * 3 - 4 = 6 - 4 = 2 (multiplication has higher precedence than subtraction)
result = 2 + 3 * 4 - 5; // 2 + 3 * 4 - 5 = 2 + 12 - 5 = 14 - 5 = 9 (multiplication has higher precedence than addition and subtraction)
result = (2 + 3) * (4 - 5); // (2 + 3) * (4 - 5) = 5 * -1 = -5 (parentheses change the order of operations)
result = 2 + 3 * 4 - 5 + 6 / 2; // 2 + 3 * 4 - 5 + (6 / 2) = 2 + 12 - 5 + 3 = 2 + 12 - 5 + 3 = 12 (multiplication and division have higher precedence than addition and subtraction, and parentheses change the order of operations)

/*
Operational hierarchy in JavaScript:
1. Parentheses ()
2. Exponentiation **
3. Multiplication *, Division /, and Remainder %
4. Addition + and Subtraction -
5. Assignment =, +=, -=, *=, /=, %=, **= (these operators have the lowest precedence)

Extras:
6. Logical operators &&, ||, ! (not included in this example, but important to know)
7. Comparison operators <, >, <=, >=, ==, !=, ===, !== (not included in this example, but important to know)
8. Bitwise operators & | ^ ~ << >> >>> (not included in this example, but important to know)
9. Conditional (ternary) operator ? : (not included in this example, but important to know)
10. Comma operator , (not included in this example, but important to know)
11. Typeof operator typeof (not included in this example, but important to know)
12. Void operator void (not included in this example, but important to know)
13. Delete operator delete (not included in this example, but important to know)
14. In operator in (not included in this example, but important to know)
15. Instanceof operator instanceof (not included in this example, but important to know)
16. Spread operator ... (not included in this example, but important to know)
17. Rest parameter ... (not included in this example, but important to know)
18. Optional chaining operator ?. (not included in this example, but important to know)
19. Nullish coalescing operator ?? (not included in this example, but important to know)
20. Template literals ` (not included in this example, but important to know)
21. Destructuring assignment { } [ ] (not included in this example, but important to know)
22. Array and object literals [ ] { } (not included in this example, but important to know)
23. Function declaration function (not included in this example, but important to know)
24. Function expression (not included in this example, but important to know)
25. Arrow function () => (not included in this example, but important to know)
26. Class declaration class (not included in this example, but important to know)
27. Class expression (not included in this example, but important to know)
28. Import and export statements (not included in this example, but important to know)
29. Module syntax import export (not included in this example, but important to know)
30. Global variables and functions (not included in this example, but important to know)
*/
