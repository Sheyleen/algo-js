let newNumber=0;
let sum=0;
let n=parseInt(prompt("Pick a number:"));

for(i=1; i<=n; i++){
    newNumber=parseInt(prompt("Pick another one:"));
    sum+=newNumber;
}

alert(sum);