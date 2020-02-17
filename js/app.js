// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
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
var sNoun = randomValueFromArray(nouns);
var sVerb = randomValueFromArray(verbs);
var sAdjective = randomValueFromArray(adjectives);
var saNoun = randomValueFromArray(aNouns);
var sPlace = randomValueFromArray(places);
var textToSpeak = document.querySelector('.textToSpeak');
var count = 0;

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
    textToSpeak = '';
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
function reset(){
    sNoun = randomValueFromArray(nouns);
    sVerb = randomValueFromArray(verbs);
    sAdjective = randomValueFromArray(adjectives);
    saNoun = randomValueFromArray(aNouns);
    sPlace = randomValueFromArray(places); 
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
textToSpeak.onclick = function() {
    if(count === 0){
        textToSpeak = sNoun + sVerb + sAdjective + saNoun + sPlace;
        speakNow(textToSpeak);
        reset();
    }
    else if(count == 5){
        speakNow(textToSpeak);
        count = 0;
    }
    else{
        alert("Please press every buttons");
        count = 0;
    }

}
noun.onclick = function() {
    resultN(sNoun);
    textToSpeak+= sNoun;
    reset();
    count++;
}
verb.onclick = function() {
    resultV(sVerb);
    textToSpeak+= sVerb;
    reset();
    count++;
}
adjective.onclick = function() {
    resultA(sAdjective);
    textToSpeak+= sAdjective;
    reset();
    count++;
}
aNoun.onclick = function() {
    resultAN(saNoun);
    textToSpeak+= saNoun;
    reset();
    count++;
}
place.onclick = function() {
    resultP(sPlace);
    textToSpeak+= sPlace;
    reset();
    count++;    
}