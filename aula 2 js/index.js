/* var nome = "Wandeilson";
var nome = "Gomes";// nao dá erro

console.log(nome);
 */
//let name = "Disso";
//let name = "ss"; dá erro
//String, Number e undefined
let num1 = 12;
let num2 = 2.33;
let myName = "Wandeilson";
console.log(typeof num1, typeof myName);

let a = 2;
let b = a;

console.log(a, b);

b = 4;

console.log(a, b);
//neste exemplo acima ele faz uma cópia do valor

let c = [1,2,4];
let d = c;
console.log(c, d);
d.push(99);
console.log(c, d);
//Neste exemplo acima o d recebe o caminho para qual c está apontando, ou seja, as duas variaveis estao 
//apontando para o mesmo objeto, por isso ao fazer o d.push(99) ele um único valor, porem essas duas variaveis estao apontando para esse mesmo valor.