/*Crie uma classe animal com propriedades como nome, especie e idade, 
Adicione um método fazeSom qque retorna o som caracteristico do animal
Considere as possibilidades de som para: 
vaca, cachorro, gato, elefante e som não identificado.*/

class Animal{
    constructor (nome, especie, idade){
        this.nome = nome;
        this.especie = especie; 
        this.idade = idade;
    }
    fazerSom () {
        if(this.especie === "vaca"){
            console.log("MUUUUUUU!");
        }else if(this.especie === "cachorro"){
            console.log("AU AU AU AU AUUUU!");
        }else if(this.especie === "gato"){
            console.log("MIAU MIAU MIAAAAAU!");
        }else if(this.especie === "elefante"){
            console.log("FUUMM UUUH");
        }else {
            console.log("Som não identificado :(");
        }
    }
 }

 const kaua = new Animal("Kauã", "gato", 17);
 console.log(kaua);
 kaua.fazerSom();

 const aryel = new Animal("Aryel", "cachorro", 15);
 console.log(aryel);
 aryel.fazerSom();

 const thales = new Animal("Thales", "elefante", 17);
 console.log(thales);
 thales.fazerSom();

 const brendha = new Animal("Brendha", "vaca", 18);
 console.log(brendha);
 brendha.fazerSom();

 const bruno = new Animal("Bruno", "lobo solitário", 15);
 console.log(bruno);
 bruno.fazerSom();