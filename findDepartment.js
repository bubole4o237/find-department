const localWordExtractor = require('./localWordExtractor.js');
const limdu = require('limdu');


// First, define our base classifier type (a multi-label classifier based on winnow):
let TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
    binaryClassifierType: limdu.classifiers.Winnow.bind(0, { retrain_count: 10 })
});


// Now define our feature extractor - a function that takes a sample and adds features to a given features set:
var wordExtractor = function (input, features) {
    input.split(" ").forEach(function (word) {
        features[word] = 1;
        // console.log(word);
    });
};


// Initialize a classifier with the base classifier type and the feature extractor:
let intentClassifier = new limdu.classifiers.EnhancedClassifier({
    classifierType: TextClassifier,
    featureExtractor: wordExtractor
});


intentClassifier.trainBatch([
    { input: "it dev developer engineer junior seignior software", output: "IT" },
    { input: "seller sales manager marketing customer application managing director", output: "Manager" },
]);


const findDepartment = (position) => {
    
    let positionFromDB = localWordExtractor(position);

    let department = intentClassifier.classify(positionFromDB); 

    return department;
}

module.exports = findDepartment;