var numero01;
	var numero02;

	numero01=parseInt(prompt("Ingrese el numero 1",""));
	numero02=parseInt(prompt("Ingrese el numero 2",""));

	if(numero01 >= numero02)
	{
        //imprime numero mayor
	document.write("El numero mayor es: " + numero01 + " ( Numero 1 )");
	}
	else
	{
       //imprime numero mayor
	document.write("El Numero mayor es : " + numero02 + " ( Numero 2 )");
	};


	//Calcular el area de una cuadrado de lado
	function Area()
        {
     var area, base, altura;
            base = prompt("Coloca la base");
            altura = prompt("Coloca la altura");

            base = parseInt(base);
            altura = parseInt(altura);
            area = (base * altura);

            alert("El area del cuadrado es:" +area);
        }


//Ingresar 3 numero por teclado y calcular el promedio de los 3
let valor1 = parseInt (prompt('ingrese el valor 1'));
let valor2 = parseInt (prompt('ingrese el valor 2'));
let valor3 = parseInt (prompt('ingrese el valor 3'));
let promedio = (valor1 + valor2 + valor3) / 3;
let promRound = Math.round(promedio)

//Ingresar las edades y determiner si pueden votar mostrando los resultados por consola
var edad = prompt("cual es tu edad");

if (edad > 18) {
  document.write("usted es mayor de edad:");
} else {
  document.write("usted es menor de edad:");
}