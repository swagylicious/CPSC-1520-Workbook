const url = 'https://stapi.co/v2/rest/spacecraft/search';
const demoFetch = function (){
    const options = {
        
    }
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

export { demoFetch };