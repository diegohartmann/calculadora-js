import { incrementarValor, setarValor, valor } from "./helpers.js"
import { getarBotoes, getarbotoesParaEscrever } from "./setBotoes.js"

// const operacoes = [
//     '0',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '+',
//     '-',
//     '/',
//     '*',
//     '.',
// ]
// const calcular = [ '=', 'Enter', 'Space', 'Spacebar' ]

// const limpar = ['Backspace']

// function animarBotao(teclaPressionada, nomeDoMetodo, callBack=(key)=>console.log(key)){
//     //escrever esses caracteres
//     operacoes.includes(teclaPressionada) && callBack(teclaPressionada)
    
//     //animar botao
//     getarBotoes()?.forEach(btn=>{
//         const podePressionar = (btn.getAttribute('data-val').includes(teclaPressionada))
//         podePressionar && btn.classList[nomeDoMetodo]("animarBotao")
//     })
// }

const pegarBotaoPeloEvento = e => getarBotoes().find( btn => btn.getAttribute('data-inputs').split("#").includes(e.key.toLowerCase()) ) 

export const teclado = () => {

    window.addEventListener('keypress', e => {
        const botaoApertado = pegarBotaoPeloEvento(e) 
        botaoApertado?.classList.add("animarBotao")
        console.log(e.key)
    })
    
    window.addEventListener('keyup', e => {
        const botaoSolto = pegarBotaoPeloEvento(e)
        botaoSolto?.classList.remove("animarBotao")

        if(getarbotoesParaEscrever()?.includes(botaoSolto)){
            incrementarValor(botaoSolto.getAttribute('data-val'));
        }else if(botaoSolto?.getAttribute('data-inputs').split('#').includes('enter')){
            setarValor( eval(valor.innerText) );
        }
    })

    // window.addEventListener('keypress', (e)=>{
    //     const myKey = `${e.key}`
    //     animarBotao(myKey, 'add');
    // })

    // window.addEventListener('keyup', (e)=>{
    //     const myKey = `${e.key}`
    //     console.log(myKey)
    //     animarBotao(myKey, 'remove', incrementarValor);
    //     if(calcular.includes(myKey)){
    //         setarValor( eval(valor.innerText) );
    //         return;
    //     }
    //     switch(myKey){
    //         case ',': incrementarValor('.'); break;
    //         case 'Escape': setarValor('0'); break;
    //     }
    // })
}