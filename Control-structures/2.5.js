let userprompt=prompt("What's your favorite number?");
let number=parseInt(userprompt);

while (number !==42){
    let i=parseInt(prompt("Are you sure?"));
    if(i==42){
        break;
    }
}