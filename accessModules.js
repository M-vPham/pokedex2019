/**
 * npm install fuse.js
 * importing fuse.js for the searching */
const Fuse = require('fuse.js');
/** Importing Firecloud */
const admin = require('./node_modules/firebase-admin');
const serviceAccount = require('./RU-Hacks-c0b37906d38c.json')

const data = require('./pokemonDatabase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://RU-Hacks.firebaseio.com"
});

let db = admin.firestore();

/**Retrieve by the index number in the pokedex
*/
function retrieveIndex(indexNumber){
    let currentPokemon = db.collection('pokemon').doc(indexNumber);
    let getPokemon = currentPokemon.get()
    .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
}
/**Retrieve by the type of the pokemon */
function retrieveTypes(pokemonType1, pokemonType2){
  //Case of both inputs
  if ((pokemonType1) && (pokemonType2)){
    let filteredArray =  data.filter(function(pokemon) {
      if ((pokemon.type1 == pokemonType1) && (pokemon.type2 == pokemonType2)){
        return(pokemon)
      }
    });
  }
  //Case of only first input 
  else if (pokemonType1){
    let filteredArray =  data.filter(function(pokemon) {
      if (pokemon.type1 == pokemonType1){
        return(pokemon)
      }
    });
  }
  else if (pokemonType2){
    let filteredArray =  data.filter(function(pokemon) {
      if (pokemon.type2 == pokemonType2){
        return(pokemon)
      }
    });
  }
}

/**Retrieve by the string that's currently in the searchbar 
 * Using fuse.js
*/

function retrieveString(substring){
  let options = {
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "name"
    ]
  };
  let fuse = new Fuse(data, options); // "data" is the item array
  let result = fuse.search(substring);
  return result;
}



//Export the functions to be used as modules 
module.exports.retrieveStringFunc = retrieveString;
module.exports.retrieveTypesFunc = retrieveTypes;
module.exports.retrieveIndexFunc = retrieveIndex;