// first task

const string = 'Привет! Как дела?';

const vowelsGroup = ["а", "е", "ё", "и", "о", "у", "ы", "ю", "я","э"];


const getVowels = function(filterString) {

  let vowels = "";

  for (let i = 0; i < filterString.length; i++) {
    const letter = filterString[i].toLowerCase();

    // if(vowelsGroup.indexOf(letter) != -1) 
    if(vowelsGroup.includes(letter)) {
      vowels = vowels + letter;
    }

  }


  return vowels;
}


console.log(getVowels(string));