const submit = document.querySelector('.btn');
const wordInput = document.getElementById('word');

const RANDOM_BASE_URL = `https://random-word-api.herokuapp.com/word?number=100&swear=0`;
const DICTIONARY_BASE_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/`;

const boxes = document.getElementsByTagName('tbody')[0];
let attempts = 0;
let answerArray = [];
let fiveLetterWord = '';

fetch(RANDOM_BASE_URL)
.then(function(data){
    return data.json();
})
.then(function(responseJson) {
    for (let i = 0; i < responseJson.length; i++){
        if (responseJson[i].length === 5) {
            fiveLetterWord = responseJson[i];
            break;
        }
    }
    answerArray = fiveLetterWord.split('');
}); 

const checkCharacters = (e) => {
    const validChar = (/[A-Za-z]{5}/.test(wordInput.value));
    if (!validChar) {
        e.preventDefault();
        wordInput.setCustomValidity('Your word can only contain lower and uppercase letters');
        console.log('Bad input');
    } else if (validChar) {
        wordInput.setCustomValidity('')
        checkRealWord(e);
    }
    wordInput.reportValidity();
}

const checkRealWord = (e) => {
    const url = `${DICTIONARY_BASE_URL}${wordInput.value}?key=${API_KEY}`;
    let wordMatch = false;

    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(responseJson) {
        console.log(responseJson);
        if (typeof(responseJson[0]) !== 'string') {
                    wordMatch = true;

        };
        
        if (wordMatch === true) {
            wordInput.setCustomValidity('');
            matchAnswer(e);
        } else {
            e.preventDefault();
            wordInput.setCustomValidity('This is not a valid word');
        };
        wordInput.reportValidity();
    });
};

const matchAnswer = (e) => {
    const wordArray = wordInput.value.split('');
    const getBox = document.getElementsByTagName('tbody')[0];
console.log(wordArray);

    for (i = 0; i < 5; i++) {
        getBox.children[attempts].children[i].innerHTML = wordArray[i];
        getBox.children[attempts].children[i].className = 'incorrect';
        for (j = 0; j < 5; j++) {
            if (wordArray[i].toLocaleLowerCase() === answerArray[j].toLocaleLowerCase()) {
                getBox.children[attempts].children[i].className = 'mixed';
            } 
            if (wordArray[i].toLocaleLowerCase() === answerArray[i].toLocaleLowerCase()) {
                getBox.children[attempts].children[i].className = 'correct';
            } 
        } 
    }
    if (fiveLetterWord.toLocaleLowerCase() === wordInput.value.toLocaleLowerCase()) {
        attempts += 5; 
    } else {
        if (attempts >= 5) {
        }
    }
    attempts++;
}

submit.addEventListener('click', function(e) {

    if (attempts < 5) {
        checkCharacters(e);
    } 

    e.preventDefault();
});




