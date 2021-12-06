import palabras from './palabras'

const input = document.querySelector('input');
const resultados = document.querySelector('.js-resultados')

const renderResultadosDebounced = debounce(renderResultados,500);

input.addEventListener('keyup', e =>{
    renderResultadosDebounced(e.target.value)
})

function renderResultados(letras){
    const resultado = palabras.filter(palabra => {
        if (palabra.match(`.*${letras}.*`)){
            return palabra
        }
    }).map(palabra => `<li>${palabra}</li>`).join('');
    
    resultados.innerHTML = resultado
}

function debounce(funcion, tiempo){
    let timeoutId;
    return function(){
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        const context = this;
        const args = arguments;
        timeoutId = setTimeout(() => {
            funcion.apply(context,args)
        }, tiempo)
    }
}