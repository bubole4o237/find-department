let limdu = require('limdu');

let MyWinnow = limdu.classifiers.Winnow.bind(0, { retrain_count: 10 });

let intentClassifier = new limdu.classifiers.multilabel.BinaryRelevance({
    binaryClassifierType: MyWinnow
});

intentClassifier.trainBatch([
    { input: { dev: 1, junior: 1, it: 1, devel: 1, software: 1, developer: 1 }, output: "IT" },
    { input: { product: 1, marketing: 1, sells: 1, manager: 1 }, output: "Manager" },
    { input: { I: 1, want: 1, chips: 1 }, output: "CHIPS" }
]);

console.dir(intentClassifier.classify({ deve: 1}));  // ['APPLE','BANANA']