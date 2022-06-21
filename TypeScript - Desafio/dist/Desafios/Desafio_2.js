"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    Pessoa.prototype.print = function () {
        console.log("!----------------------------------!");
        console.log("!-Nome: ".concat(this.nome));
        console.log("!-Idade: ".concat(this.idade));
        console.log("!-Profiss\u00E3o: ".concat(this.profissao));
        console.log("!----------------------------------!\n");
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("maria", 29, "atriz");
var pessoa2 = new Pessoa("roberto", 19, "Padeiro");
var pessoa3 = new Pessoa("laura", 32, "Atriz");
var pessoa4 = new Pessoa("carlos", 19, "padeiro");
pessoa1.print();
pessoa2.print();
pessoa3.print();
pessoa4.print();
