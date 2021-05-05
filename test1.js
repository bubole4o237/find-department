var limdu = require('limdu');

// var colorClassifier = new limdu.classifiers.NeuralNetwork();

console.dir('Begin test!!!');

// colorClassifier.trainBatch([
//     { input: { r: 0.03, g: 0.7, b: 0.5 }, output: 0 },  // black
//     // { input: { r: 0.08, g: 0.3, b: 0.1 }, output: 0 },  // black
//     { input: { r: 0.16, g: 0.09, b: 0.2 }, output: 1 }, // white
//     { input: { r: 0.5, g: 0.5, b: 1.0 }, output: 1 }   // white
// ]);


var wordClassifier = new limdu.classifiers.NeuralNetwork();


wordClassifier.trainBatch([
    { input: { name: 0.99 }, output: 1 }, // person
    { input: { name: 0.50 }, output: 1 }, // person
    { input: { name: 0.40 }, output: 0 }, // object
    { input: { name: 0.03 }, output: 0 }, // object
    { input: { name: 0.87 }, output: 1 }, // person
    { input: { name: 0.91 }, output: 1 }, // person
]);

// console.log(colorClassifier.classify({ r: 1, g: 0.4, b: 0 }));  // 0.99 - almost white
console.log(wordClassifier.classify({ name: 0.2 }));  // 0.99 - almost white
console.log(wordClassifier.classify({ name: 0.02 }));  // 0.99 - almost white
console.log(wordClassifier.classify({ name: 0.90 }));  // 0.99 - almost white
console.log(wordClassifier.classify({ name: 0.5 }));  // 0.99 - almost white
console.log(wordClassifier.classify({ name: 0.07 }));  // 0.99 - almost white
console.log(wordClassifier.classify({ name: 0.99 }));  // 0.99 - almost white

console.dir('THIS IS THE END OF THE test!!!');
