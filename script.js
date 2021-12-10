// The first task

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


// The second task #2 Выборка объекта


// const workers = [
//   {"name": "John", "salary": 500},
//   {"name" :"Mike", "salary": 1300},
// 	{"name" :"Linda", "salary": 1500}
// ]

// const getWorthyWorkers = function(workersFilter) {
//   let worthyWorkers = [];

//   for(i=0; i < workersFilter.length; i++) {
//     const worker = workersFilter[i];


//     if(worker.salary > 1000) {
//       worthyWorkers.push(worker.name);

//     } 
//   }
//    return worthyWorkers;
// };


// console.log(getWorthyWorkers(workers));


const workers = [
  {"name": "John", "salary": 500},
  {"name" :"Mike", "salary": 1300},
	{"name" :"Linda", "salary": 1500}
]

const getWorthyWorkers = function(workersFilter) {
  let worthyWorkers = [];

  workersFilter.forEach(function (worker) {
    if(worker.salary > 1000) {
      worthyWorkers.push(worker.name);
    } 
  })
   return worthyWorkers;
};


console.log(getWorthyWorkers(workers));

// The third task #3 Анализ строки

      
const path = "/users/download/index.html"

const isHtml = function(checkedPath) {
  const trueFormat = ".html";
  const pathExt = checkedPath.slice(-5);
  // if(pathExt == trueFormat) {
  //   return true
  // } else {
  //   return false
  // }
  return pathExt == trueFormat

}

console.log(isHtml(path));