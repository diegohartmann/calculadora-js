
export const valor = document.querySelector('header')

function animar(){
    valor.classList.add('animarValor')
    setTimeout(()=>{
        valor.classList.remove('animarValor')
    }, 200)
}

export function setarValor(val){ 
    valor.innerText = val 
    animar();
}
export function incrementarValor(val){
    valor.innerText += val 
    if(valor.innerText[0] === '0'){
        let _array = (valor.innerText).split('');
        _array.shift() //remove o primero el
        valor.innerText = _array.join(''); //string alterada
    }
    animar();
}

export function addClick(el, callBack){ el.addEventListener('click', callBack) }