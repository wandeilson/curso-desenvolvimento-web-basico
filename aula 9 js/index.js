/* const array = [1,2,3,4,5];

//array = "alterando"; dá erro pois é uma constante
array.push(99);//Pode ser feito, pois msm sendo uma constante eu não estou alterando o que a variavel representa, estou apenas alterando o objeto para onde a variavel está apontando 

console.log(array);
 */

//Criando objetos
/* const pessoa = {
    nome: "Wandeilson",
    sobreNome: "Gomes",
    idade: 25
};

function criaPessoa(nome, sobreNome, idade){
    return {
        nome: nome,
        sobreNome: sobreNome,
        idade: idade
    }
};

const pessoa1 = criaPessoa("Vanderlan","Gomes",29);
console.log(pessoa1); */
//Criando objetos com metodos
const pessoa = {
    nome: "Wandeilson",
    sobreNome: "Gomes",
    idade: 25,

    apresentar(atributo){
        console.log("Olá, sou o", this.nome, "tenho",this.idade,"anos. Este é o atributo passado no metodo:",atributo);
    }
}

pessoa.apresentar("AQUIII");