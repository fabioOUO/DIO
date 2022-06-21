class Pessoa {
    
    private nome: string;
    private idade: number;
    private profissao: string;

    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    public print(): void{
        console.log("!----------------------------------!");
        console.log(`!-Nome: ${this.nome}`);
        console.log(`!-Idade: ${this.idade}`);
        console.log(`!-Profissão: ${this.profissao}`);
        console.log("!----------------------------------!\n");
    }    
}

const pessoa1 = new Pessoa("maria", 29, "atriz"); 
const pessoa2 = new Pessoa("roberto", 19, "Padeiro"); 
const pessoa3 = new Pessoa("laura", 32, "Atriz"); 
const pessoa4 = new Pessoa("carlos", 19, "padeiro"); 


pessoa1.print();
pessoa2.print();
pessoa3.print();
pessoa4.print();