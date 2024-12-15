'use strict';

const dollar = 26;

for(let num = 10; num <= 100; num += 10) {
    const result = dollar * num;
    console.log(`${num} доларів буде ${result} грн`);
}