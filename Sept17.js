let n = 5; 

for (let i = 0; i < n; i++)
{
    let row = ' ';
    for (let j = 0; j < n; j++)
    {
        row+= "* "
    }
}
  console.log(row);
// solid 5x5 square

for (let i = 1; i <= n; i++) 
{
    let row = "";
    for (let j = 1; j <= i; j++) 
    {
      row += "* ";
    }
    console.log(row);
}
// right triangle

for (let i = 1; i <= n; i++) 
{
    let row = "";
    for (let j = 1; j <= n - i; j++) 
    {
      row += "  ";
    }
    for (let k = 1; k <= i; k++) 
    {
      row += "* ";
    }
    console.log(row);
}
// reflected right triangle

for (let i = 1; i <= n; i++) 
{
    let row = "";
    for (let j = 1; j <= n - i; j++) 
    {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) 
    {
      row += "*";
    }
    console.log(row);
  }
// pyramid  

let size = 6; 
for (let i= 0; i < size; i++)
{
  let row = ""
  for (let j = 0; j < size; j++)
  {
    row += (i+j) % 2 === 0 ? '#' : "@";
  }
  console.log(row);
}
// chessboard 6x6 

let a = 0; 
let b = 1; 
let result = a + " " + b + " ";
for (let i = 3; i <= 10; i++)
{
  let next = a + b; 
  result += next + ' ';
  a = b; 
  b = next; 
}
console.log(result.trim())
// fibonnaci sequence 

function factorialWhile ()
{
  let result = 1; 
  let i = 1; 
  while (i <= n)
  { 
    result *= i; 
    i++; 
  }
  return result; 
}

function factorial(n) {
  if(n == 0){

  }
}