let v = 15;

if(v < 18) {
    console.log("insuffciente")
}

if(v >= 18 && v <= 21) {
    console.log("suffciiente")
}
 
if(v >= 21 && v <= 24) {
    console.log("buono")
}

if(v >= 24 && v <= 27) {
    console.log("distinto")
}

if(v >= 27 && v <= 29) {
    console.log("ottimo")
}

if(v == 30) {
    console.log("eccellente")
}

let c= 23;

if (c <18){ console.log("insufficiente")        
}else if (c >= 18 && c <= 21) {
    console.log("suffciiente")
}else if(c >= 21 && c <= 24) {
    console.log("buono")
}else if(c >= 24 && c <= 27) {
    console.log("distinto")
}else if(c >= 27 && c <= 29) {
    console.log("ottimo")
}else if(c == 30) {
    console.log("eccellente")
}
 

let voto = "23"

switch(voto) {
    case "18","19", "20" : console.log("sufficiente");
    break;

    case "21", "22", "23" : console.log("buono");
    break;

    case "24", "25", "26" : console.log("distinto");
    break;

    case "27", "28", "29" : console.log("ottimo");
    break;

    case "30" : console.log("eccellente");

    default:
    console.log("Voto Insufficiente");
}