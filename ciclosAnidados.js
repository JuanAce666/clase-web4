//ejercicio series loteria
/*var series = parseInt(prompt("Digite series de loteria"));
var numeros = parseInt(prompt("Cuantos numeros va a tener cada serie"));
for (let i = 1; i <= series ; i++){
    document.write("Serie #"+i+"<br>");
    for(var x=1; x <=numeros; x++){
        document.write( x +"<br>");
    }
    document.write("<hr>");
}
*/

//Ejercicio 8
/*var altura = parseInt(prompt("Digite altura del triangulo"));
var x = 1;
while (x <= altura ){
    var y = 1;
    while (y <= x){
        document.write("*");
        y++
    }
    document.write("<br>")
    x++;
}
*/
/* var altura = parseInt(prompt("Digite altura del triangulo"));
var signo = prompt("Signo del triangulo")
for (var x = 1; x <= altura; x++){
    for (var y = 1; y <= x; y++){
        document.write(signo);
    }
    document.write("<br>")
}
*/
//Punto 9 
/*var altura = parseInt(prompt("Digite altura del triangulo"));
var signo = prompt("Signo del triangulo")
for (var x = 1; x <= altura; x++){
    for (var y = altura; y >= x; y--){
        document.write(signo);
    }
    document.write("<br>")
}
*/
var altura = parseInt(prompt("Digite altura del triangulo"));
var x = 1;
while (x >= altura ){
    var y = 1;
    while (y >= x){
        document.write("*");
        y++
    }
    document.write("<br>")
    x++;
}