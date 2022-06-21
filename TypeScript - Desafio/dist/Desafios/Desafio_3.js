"use strict";
var btnAtualizar = getElementById("atualizar-saldo");
var btnLimpar = getElementById("limpar-saldo");
var soma = getElementById("soma");
var campoSaldo = getElementById("campo-saldo");
function getElementById(id) {
    return document.getElementById(id);
}
function start() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '0';
    }
}
function somar(valor) {
    if (campoSaldo) {
        campoSaldo.innerHTML += valor;
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
if (btnAtualizar) {
    btnAtualizar.addEventListener('click', function () {
        if (soma) {
            somar(parseFloat(soma.value));
        }
    });
}
if (btnLimpar) {
    btnLimpar.addEventListener('click', limparSaldo);
}
start();
