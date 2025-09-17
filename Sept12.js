function square(num)
{
    return (num * num);
}
// you declar a function, square-- and then (num) as the variable inside of it
// you return it so it stores a value/keeps it to js chill inside

/*
the SHORTER way to square a number is...
const square = x => x*x; 

WHEN x is the number inputted 
*/

for (let i=1; i<=25; i++)
{
    console.log(square(i))
}
// outputs all squared numbers to 25

function cube(anothernum)
{
    return (anothernum*anothernum*anothernum);
}
// declaring function named cube, w/ variable used anothernum
// execute math operation inside function to save value 

for (let i=1; i<=25; i++)
{
    console.log(cube(i));
}
// outputs all cube numbers to 25

const greet = (name) => {
    return 'Hello, ${name}!';
};
// the complete veersion zawg

greet = name => console.log("Yes Indeed a A SHORTER VERSION Of the one above")

setTimeout(function()
{
    console.log("Times up daawg");
});
// this is a throwaway fuunction w/ no naame 

/*

DELCARATION --> function name(...){}
EPRESSION --> const name = function(...){} 
ANONYMOUS --> function(...){}
ARROW --> const name = (...) => 

REMEMBER: What will JAVASCRIPT prioritize in order (MOST to LEAST)?

- (1) Javascript will first prioritize the EXCLAMATION POINT ( not, ! )
- (2) Javascript will also prioritize <, >, <=, >= NEXT
- (3) Then will prioritize 
{ == equal to}, {=== strictly equal}, {!= not equal to} {!==strictly not equal to}
- (4) && --> and, BC it is STRICTER than OR 
- (5) || --> or

*/

// make it a 5 BY 5 right angle triangle 
for (let i=0; i<=5; i++)
{
    for (let j = 0; j <=5; j--)
    {
        
    }
}