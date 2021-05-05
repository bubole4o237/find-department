let separators = ['/', '!', '(', ')', '-', '_', '<', '>', ',', '.', '"', '*', '='];

const localWordExtractor = (input) => {
    let newInput = input.toLowerCase();
    separators.forEach(symbol => newInput = newInput.split(symbol).join(" "));
    
    return newInput.split(/\s+/g).join(" ");
};


// wordExtractor('Professional Conference  Interpreter/Translator (ENG <-> JPN)');
// console.log(wordExtractor('Global Ing* Key-Account_Executive, IAvoR=Co. /Toyota. group., Vice President'));

module.exports = localWordExtractor;