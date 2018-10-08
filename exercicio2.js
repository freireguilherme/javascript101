var p1 = {x:1, y:2};
var p2 = {x:3, y:4};


var d = function(p1,p2) {
    return Math.sqrt(Math.pow((p2.x-p1.x),2)+Math.pow((p2.y-p1.y),2));
    };

    console.log(d(p2,p1));