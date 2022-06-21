type Elemento = HTMLElement | HTMLInputElement | null;

const btnAtualizar:Elemento = getElementById("atualizar-saldo");
const btnLimpar:Elemento = getElementById("limpar-saldo");
const soma:Elemento = getElementById("soma");
const campoSaldo:Elemento = getElementById("campo-saldo");


function getElementById(id: string):Elemento{
    return document.getElementById(id);
}

function start():void{
    if(campoSaldo){
        campoSaldo.innerHTML = '0';
    }
}

function somar(valor: number):void{
    if(campoSaldo){
        campoSaldo.innerHTML += valor;
    }
}

function limparSaldo():void {
    if(campoSaldo){
        campoSaldo.innerHTML = '';
    }
}

if(btnAtualizar){
    btnAtualizar.addEventListener('click', function () {
        if (soma){
            somar(parseFloat(soma.value));
        }
    });
}
if(btnLimpar){
    btnLimpar.addEventListener('click', limparSaldo);
}

start();