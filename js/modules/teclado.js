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



export const teclado = () => {

    window.addEventListener('keypress', (e)=>{
        const myKey = `${e.key}`
        if(operacoes.includes(myKey)){
            getarBotoes()?.forEach(btn=>{
                const _match_ = (myKey === btn.getAttribute('data-val'))
                _match_ && btn.classList.add("animarBotao")
            })
        } 
    })

    window.addEventListener('keyup', (e)=>{
        const myKey = `${e.key}`
        if(operacoes.includes(myKey)){
            incrementarValor(myKey)
            getarBotoes()?.forEach(btn=>{
                const match = (myKey === btn.getAttribute('data-val'))
                match && btn.classList.remove("animarBotao")
            })
            return;
        } 
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