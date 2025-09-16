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