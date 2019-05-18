/** Importing Express */
const express = require('express');
const app = express();
const PORT = 4001; 

/** Importing Firecloud */
const admin = require('./node_modules/firebase-admin');
const serviceAccount = require('./RU-Hacks-c0b37906d38c.json')

const data = require('./pokemonDatabase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://RU-Hacks.firebaseio.com"
});

let db = admin.firestore();

function addAll(){
  data && data.forEach(pokemon => {
    if (typeof pokemon === "object") {
        let pokedexNumber = pokemon.pokedex_number;
        delete pokemon.pokedex_number;
          admin.firestore()
              .collection("pokemon")
              .doc(pokedexNumber)
              .set(pokemon)
              .then((res) => {
                  console.log("Document successfully written!");
              })
              .catch((error) => {
                  console.error("Error writing document: ", error);
              });
    }
  });
}

function retrieveOne(indexNumber){
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

retrieveOne("2");

