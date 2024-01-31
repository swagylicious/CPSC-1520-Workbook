const log = console.log

log('Hello, world!')

const form = document.querySelector('#shipping-calculator')

const calculateQuote = function(ev){
    ev.preventDefault()
    log('form submitted')
    const form = ev.target // 
    
}

form.addEventListener('submit', calculateQuote)