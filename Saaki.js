let point = 2;
let length = "";
function Khaled(){
   
    while(point != Infinity){
        point = point*point; 
        length = length + point + "<br>";
    }
    //return point, length;
    document.getElementById("demo").innerHTML = length;
}
document.getElementById("demo").innerHTML = point;

