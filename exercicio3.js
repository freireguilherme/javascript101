var num = [12,13,41,5,3,23,42,46,76,45,67,97,77,65,445,22,56];
var r = 0;
for(var i = 0; i<num.length; i++)
    if(num[i] % 2 == 0 && num[i] > r)
        r = num[i];

console.log(r);