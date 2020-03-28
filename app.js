const url = 'https://services7.arcgis.com/sJpZAOd8WRG6jQHH/arcgis/rest/services/Ukupan_broj_BiH_VIEW/FeatureServer/0/query?f=json&where=objectid%20IS%20NOT%20NULL&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=objectid%20desc&resultOffset=0&resultRecordCount=1&cacheHint=true&fbclid=IwAR1o7NdixvUHe9MsvyTboloyxQGAHpaAtIWvBOw4K9EzKyvnWg36zQ3rgkw'


let dataHolder = document.getElementById('dataholder');

//Make a request for data
const http = new EasyHTTP;
let httpResult;

let output = '';

const connect = http.get(url)
    .then(data => {
        httpResult = data;
        updateUI(httpResult);
    })
    .catch(err => console.log(err));


const updateUI = function(dataSet){
    let name = '';
    let alias = '';
    let value = 0;
    
    for(let i = 6; i < 10; i++){
        name = dataSet.fields[i].name;
        alias = dataSet.fields[i].alias;
        value = dataSet.features[0].attributes[`${name}`];

        output += `<div class="card white col s12 m12">
        <div class="card-content black-text">
            <p class="center-align flow-text">${alias}</p>
            <h2 class="center-align">${value}</h2>
        </div>
    </div>
    `
    }

    dataHolder.innerHTML = output;
}