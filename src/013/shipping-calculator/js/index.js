const log = console.log

log('Hello, world!')

const form = document.querySelector('#shipping-calculator')

const calculateQuote = function(ev){
    ev.preventDefault()
    log('form submitted')
    const form = ev.target // 
    const input = form.elements.weight 
    const kg = parseFloat(input.value)
    log(kg)
    if(kg !== NaN){
        if(kg >= 1 && kg <= 1000){
            const amount = kg * 11.75  
            const rateHtml = `<b>$ ${amount}</b> ($11.75 per kg)`
        }
    }
}

form.addEventListener('submit', calculateQuote)