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
    { input: "it ai cad internet site information cloud technology artificial intelligence developer dev software", output: "IT" },
    { input: "marketing", output: "Marketing" },
    { input: "sales", output: "Sales" },
    { input: "project", output: "Project" },
    { input: "design designing", output: "Designing" },
    { input: "purchasing", output: "Purchasing" },
    { input: "product production manufacturing", output: "Production" },
    { input: "maintenance customer support", output: "Maintenance" },
    { input: "store", output: "Store" },
    { input: "supplier", output: "Logistics" },
    { input: "quality", output: "Quality" },
    { input: "inspection", output: "Inspection" },
    { input: "package packaging", output: "Packaging" },
    { input: "financial", output: "Finance" },
    { input: "account accounting", output: "Account" },
    { input: "research r&d", output: "Research & Development" },
    { input: "innovation", output: "Innovation" },
    { input: "hr career mental health human resource resources ", output: "Human Resource" },
    { input: "international business", output: "Business Development" },
    { input: "security", output: "Security" },
    { input: "administration ", output: "Administration" },
    { input: "contract legal", output: "Legal" },

]);


const findDepartment = (position) => {
    
    let positionFromDB = localWordExtractor(position);
    console.log("<<< " + positionFromDB + " >>>");

    let department = intentClassifier.classify(positionFromDB); 

    return department;
}

module.exports = findDepartment;