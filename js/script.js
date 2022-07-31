import { setBotoes } from './modules/setBotoes.js'
import { setCalcular } from './modules/setCalcular.js'
import { setHeader } from './modules/setHeader.js'
import { teclado } from './modules/teclado.js'

window.addEventListener('load', ()=>{
    setHeader();
    setBotoes();
    setCalcular();
    teclado();
})