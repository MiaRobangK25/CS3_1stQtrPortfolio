for (let i=1; i<=20; i++)
{
    console.log(i)
}
//for (start/initializing ; criteria ; terminate)
//   console.log(output the variable name)



for (let i=2; i<=20; i++)
    {
        console.log(i)
    }
// this is IF you want to adjust it



let mathquiz = 1;
while (mathquiz <=3)
{
    console.log(mathquiz);
    mathquiz++;
}
/*
initialize the variable
have the while loop, adjust the condition --> while (condition)
inside, within {} is the LOOP BODY, {LOOP BODY}
make sure to terminate it WITHIN the loop body
*/



i=1;
do{
    console.log(i);
    i++;
} while (i<=3)

// so this is the DO body, then while at the END... yes the brackets IK
// it bothers you... I see that..

// A

grade = [99, 100,97, 82, 96];
// this is how to declare an ARRAY^^
//prioritize learning this first
for (let i = 0; i <grade.length; i++)
{
    // note: grade.length is the same as i < 5, it's HOW many containers there are
    // that is represented AS the length, w/o having 2 do math
    console.log(grade[i]);
}

// B

for (let grades of grade)
{
    console.log(grade);
}
// this mades for every grade IN the grades array, they will alter the criteria
// even if you remove let, most nodes let it run

// C

grades.forEach(print_grade)
function print_grade(grade)
{
    console.log(grade);
}
// once you see forEach, thatmeans you'll recognize every grade-- so now it's important
// then you use print_grade so you are able to print all the grades..... --> but more intuitively



grades = [99,100,97,82,96]
arr = grades;
grades[0] = 1000;
console.log(arr[0])
// the ADDRESS of the assignment is still equal
// therefore the output still 1000, not 99 
// B4, PISAY was called SCIENCE, it had 1 building; now it's still considered SCIENCE but 2 buildings
// therefoRe, SCIENCE now is updated to 2 buildings 
// JAVASCRIPT IS SMART, and also LUTANG



Grades=[99, 100, 97, 82, 96]
Grades.push("kangkong")
// yes, you can push weird stuff into your array 
Grades.unshift("mangga")

var popped = Grades.pop();
// removes LAST element, then put it sa variable 'popped'
var shifted = Grades.shift()
// yes, I lost track 

console.log(Grades)
console.log(popped, shifted)

