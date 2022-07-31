import { addClick, incrementarValor } from "./helpers.js"

const get = (selector) => Array.from(document.querySelectorAll(selector))


let botoes;
export const getarBotoes = () => botoes ?? []

export const setBotoes = () =>{
    botoes = [...get('.numero'), ...get('.operacao') ]
    botoes.forEach( btn => {
        addClick(btn, ()=> {
            incrementarValor(btn.getAttribute('data-val'))
        } )
    })
}