/* Funciones incorporadas *//* 
Generales
    - > Todo línea de código o instrucción ( bloque ) termina; ( punto y coma )
    - > JS tiene funciones integradas - > alerta, pronta, confirmar
    - > JS tiene libres integradas - > Matemáticas ( Conjunto de funciones matematicas )
    - > JS Usa concepto de programación Orientada a Objetos ( Atributos, Metodos )

Operadores Matematicos
    + - > Suma
    - - > resta
    *   - > Producto
    /   - > División
    **  - > Potencia
    %   - > Residuo de una division entera 

    DIV decimal - > 10/3 = 3.333 DIV Entera - > 10/3 = 3 residuo 1 ( 10% 3 )

Variables de declarante: var / let / const
    El signo = "igual" - >asignar un valor a una variable
    Las variables se declaran una sola vez
*/

let num1 = 120;
let num2 = 125;
let producto = num1 * num2; //15000

/* concatenando la variable producto a un mensaje de texto */
alert("el resultado es: producto");
alert(producto);
alert("El resultado es:" + producto); //El rsultado es 15000
alert(`El resultado es: ${producto}`); //El rsultado es 15000

/* Ejemplo de manipulación del DOM -> Document Object Model */

// Capturar el elemento p del DOM cuyo ID es resultado1
// document -> al objeto documento
//.getElementById -> Es una funcion de document = Método
//Captura el elemneto del DOM cuyo ID se indica entre paréntesis
const pResultado1 = document.getElementById("resultado1");
const pResultado2 = document.getElementById("resultado2");
const pResultado3 = document.getElementById("resultado3");
const pResultado4 = document.getElementById("resultado4");

/* Funcionalidad a un button */

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.onclick = function(){
     num1 = 1520;
     num2 = 7;
     producto = num1 / num2;

    pResultado1.innerText = "El resultado es producto";
    pResultado2.innerText = "aquí con ToFix(2)" + producto.toFixed(2);
    pResultado3.innerText = "El resultado con Math.round() " + Math.round(producto);
    pResultado4.innerText = `El resultado es ${producto}`;
  }
