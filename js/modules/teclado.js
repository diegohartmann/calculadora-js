import { incrementarValor, setarValor, valor } from "./helpers.js"
import { getarBotoes } from "./setBotoes.js"

const operacoes = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '-',
    '/',
    '*',
    '.',
]
const calcular = [ '=', 'Enter', 'Space', 'Spacebar' ]

// const limpar = ['Backspace']

function animarBotao(teclaPressionada, nomeDoMetodo, callBack=(key)=>console.log(key)){
    
    //escrever esses caracteres
    operacoes.includes(teclaPressionada) && callBack(teclaPressionada)
    
    //animar botao
    getarBotoes()?.forEach(btn=>{
        const podePressionar = (btn.getAttribute('data-val').includes(teclaPressionada))
        podePressionar && btn.classList[nomeDoMetodo]("animarBotao")
    })
}
export const teclado = () => {

    window.addEventListener('keypress', (e)=>{
        const myKey = `${e.key}`
        animarBotao(myKey, 'add');
    })

    window.addEventListener('keyup', (e)=>{
        const myKey = `${e.key}`
        console.log(myKey)
        animarBotao(myKey, 'remove', incrementarValor);
        if(calcular.includes(myKey)){
            setarValor( eval(valor.innerText) );
            return;
        }
        switch(myKey){
            case ',': incrementarValor('.'); break;
            case 'Escape': setarValor('0'); break;
        }
    })
}