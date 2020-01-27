// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var speakButton = document.querySelector('button');
var noun = document.querySelector('.noun');
var verb = document.querySelector('.verb');
var adjective = document.querySelector('.adjective');
var aNoun = document.querySelector('.aNoun');
var place = document.querySelector('.place');
const nouns = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'dosent\' like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const aNouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions
-------------------------------------------------- */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function resultN(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function resultV(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function resultA(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function resultAN(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function resultP(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
    var textToSpeak = randomValueFromArray(nouns) + randomValueFromArray(verbs) + randomValueFromArray(adjectives) + randomValueFromArray(aNouns) + randomValueFromArray(places);
    speakNow(textToSpeak);
}
noun.onclick = function() {
    resultN(randomValueFromArray(nouns));
}
verb.onclick = function() {
    resultV(randomValueFromArray(verbs));
}
adjective.onclick = function() {
    resultA(randomValueFromArray(adjectives));
}
aNoun.onclick = function() {
    resultAN(randomValueFromArray(aNouns));
}
place.onclick = function() {
    resultP(randomValueFromArray(places));
}