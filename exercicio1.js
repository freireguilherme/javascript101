var i;
var numeros = [1,4,10,203,205,104,69,34,799,394,23,1295,45]
var r = [];
for(i=0; i<numeros.length;i++){
    if(numeros[i]>=1 && numeros[i]<=100){
        r.push(numeros[i]);
    }
}

console.log(r);