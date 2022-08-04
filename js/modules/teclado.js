import { incrementarValor, setarValor, valor } from "./helpers.js"
import { getarBotoesParaAnimar, getarbotoesParaEscrever } from "./setBotoes.js"

const pegarBotaoPeloEvento = e => getarBotoesParaAnimar().find( btn => btn.getAttribute('data-inputs').split("#").includes(e.key.toLowerCase()) ) 

export const teclado = () => {

    window.addEventListener('keydown', e => {
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
        }else if(e.key === 'Escape'){
            setarValor('0')
        }
    })
}