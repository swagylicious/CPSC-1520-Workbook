const url = 'https://stapi.co/api/v2/rest/spacecraft/search';

const dumpInfo = function (element, obj) {
    console.log(element);
    console.log(obj);
    if (element && obj) {
        let content = '<table><tr><th>Name</th></tr><tr><th>Regestry</th></tr>';
        
    }
    else {
        console.log('element or obj is not defined');
    }
}

const demoFetch = function (element){

    fetch(url)
        .then(response => response.json())
        .then(data => dumpInfo(element, data))
        .catch(error => console.log(error));
}

export { demoFetch };