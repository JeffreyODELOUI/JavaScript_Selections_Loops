console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <100; i++){
    if(i % 2 !== 0){console.log(i);}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i=1; i<100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ");
    }
    else if(i % 3 === 0){
        console.log("FIZZ");}
    else if(i % 5 === 0){
        console.log("BUZZ");}
}

// Evercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i =1;
// OddNumbers
while(i<100){
    if(i % 2 !== 0){console.log(i)}
    i++;
}
console.log();
let j =1;
do{
    if(j % 2 !== 0){console.log(j);}
    j++;
} while(j<100)

//FIZZBUZZ
console.log();
let k=1;
while(k<100){
    if(k % 3 === 0 && k % 5 === 0){
        console.log("FIZZBUZZ");
        }
    else if(k % 3 === 0){
        console.log("FIZZ");
    }
    else if(k % 5 === 0){
        console.log("BUZZ");
    } 
    k++;
}
console.log();
let u=1;
do{
    if(u % 3 === 0 && u % 5 === 0){
        console.log("FIZZBUZZ");
        }
    else if(u % 3 === 0){
        console.log("FIZZ");
        }
    else if(u % 5 === 0){
        console.log("BUZZ");
        }
    u++;
} while(u<100)

//Exercise 4:
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
for(let i=0; i<n; i++){
    if(i === value){
        console.log("Found value\n");
        break;
    }
}
n < value ? console.log("Did not find value\n") : console.log();

//Exercise 5:
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let no = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i= start; i<= no; i++){
    if(i % fizzDivisor === 0 && i % buzzDivisor === 0){
        console.log("FIZZBUZZ");
    }
    else if(i % fizzDivisor === 1){
        console.log("FIZZ");
    }
    else if(i % buzzDivisor === 0){
        console.log("BUZZ");
    }
}


