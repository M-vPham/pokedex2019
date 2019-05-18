/** Importing Express */
const express = require('express');
const app = express();
const PORT = 4001; 

app.use(express.static('public'));
/** Import the csv-json library */
let csvToJson = require('convert-csv-to-json');
let fileInputName = 'newPokemonDatabase.csv';
let fileOutputName = 'pokemonDatabase.json';

const pokedexArray = [];

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
let json = csvToJson.getJsonFromCsv(fileInputName);
for (let i=0; i<json.length;i++){
    csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
    pokedexArray.push(json[i])
    console.log(json[i]);
}
    
