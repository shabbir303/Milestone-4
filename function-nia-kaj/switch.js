// if-else problem n.b-use debug
var color = "yellow";
if(color === "white"){
    console.log("I have a white friend");
}
else if(color === "red"){
    console.log("I have a red friend");
}
else if(color === "green"){
    console.log("I have a green friend");
}
else if(color === "yellow"){
    console.log("I have a yellow friend");
}
else if(color === "blue"){
    console.log("I have a blue friend");
}
else{
    console.log("I have a black friend");
}

// if-else er alternative holo switch
switch(color){
    case 'green':
        console.log("my green friend");
        break;
    case 'yellow':
        console.log("my yellow friend");
        break;
    case 'red':
        console.log("my red friend");
        break;
    case 'violet':
        console.log("my violet friend");
        break;
        default:
            // eta else er moto
            console.log("you are my black friend")
}
