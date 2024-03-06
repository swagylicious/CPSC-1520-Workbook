const url = 'https://stapi.co/api/v2/rest/spacecraft/search';

const dumpInfo = function (element, obj) {
    console.log(element);
    console.log(obj);
    if (element) {
        element.innerHTML = JSON.stringify(obj);
    }
}

const demoFetch = function (element){

    fetch(url)
        .then(response => response.json())
        .then(data => dumpInfo(element, data))
        .catch(error => console.log(error));
}

export { demoFetch };