const url = 'https://stapi.co/api/v2/rest/spacecraft/search';
const demoFetch = function (){
    const options = {
        mode: 'no-cors'
    }
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

export { demoFetch };