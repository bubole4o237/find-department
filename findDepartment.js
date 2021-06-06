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
    { input: "accounting : 2nd level controller for accounting & mad at risk & control department", output: "Back Office" },
    { input: "senior associate, Legal coe", output: "Back Office" },
    { input: "planning and planning work related to reinsurance", output: "Back Office" },
    { input: "ecommerce sop analyst", output: "Back Office" },
    { input: "head of operation", output: "Operations" },
    { input: "business administration group", output: "Operations" },
    { input: "fund manager", output: "Operations" },
    { input: "new product development", output: "Operations" },
    { input: "normal & low temperature operation group asst mgr", output: "Operations" },
    { input: "process improvement manager", output: "Operations" },
    { input: "technical account manager", output: "Services" },
    { input: "telco project manager", output: "Services" },
    { input: "telco sr project manager", output: "Services" },
    { input: "telco technical account manager", output: "Services" },
    { input: "mbg service delivery manager", output: "Service Delivery" },
    { input: "business relationship manager", output: "Sales" },
    { input: "partner sales assistant team", output: "Sales" },
    { input: "automotive dedicated solution sr manager", output: "Sales" },
    { input: "commercial isr giga hc#2", output: "Sales" },
    { input: "consumer services business development", output: "Sales" },
    { input: "consumer hq sales", output: "Sales" },
    { input: "dcg global account sales", output: "Sales" },
    { input: "education business development manager / 教育ビジネス開発マネージャー", output: "Sales" },
    { input: "global account manager for automotive", output: "Sales" },
    { input: "inside sales", output: "Sales" },
    { input: "local account manager", output: "Sales" },
    { input: "web inside sales representative", output: "Sales" },
    { input: "workstation business development manager", output: "Sales" },
    { input: "ecommerce sr specialist", output: "Sales" },
    { input: "agency sales", output: "Sales" },
    { input: "branch manager", output: "Sales" },
    { input: "dfl system planning for dx cx", output: "Sales" },
    { input: "defined contribution pension promotion business", output: "Sales" },
    { input: "head of security", output: "IT" },
    { input: "head of transformation", output: "IT" },
    { input: "dfl contract management application development", output: "IT" },
    { input: "consumer marketing manager / sr specialist", output: "Marketing" },
    { input: "digital marketing sr specialist", output: "Marketing" },
    { input: "affinity marketing", output: "Marketing" },
    { input: "dfl marketing planning in the digital domain", output: "Marketing" },
    { input: "innovation promotion department", output: "Marketing" },
    { input: "cmf staff engineer", output: "Engineering" },
    { input: "computer vision fw sw engineer", output: "Engineering" },
    { input: "development project leader", output: "Engineering" },
    { input: "electrical engineer", output: "Engineering" },
    { input: "embedded android engineer", output: "Engineering" },
    { input: "embedded systems hw engineer", output: "Engineering" },
    { input: "image quality engineer", output: "Engineering" },
    { input: "mechanical engineer", output: "Engineering" },
    { input: "oem solution architect", output: "Engineering" },
    { input: "premier support contact center engineer", output: "Engineering" },
    { input: "product development leader", output: "Engineering" },
    { input: "product manager", output: "Engineering" },
    { input: "product manager, development manager", output: "Engineering" },
    { input: "product operations senior manager", output: "Engineering" },
    { input: "project manager service", output: "Engineering" },
    { input: "notebook pc storage engineer", output: "Engineering" },
    { input: "smb sales business development manager sr manager", output: "Engineering" },
    { input: "sw bios engineer", output: "Engineering" },
    { input: "security business development manager", output: "Engineering" },
    { input: "service sales for education businesses", output: "Engineering" },
    { input: "software engineer bios", output: "Engineering" },
    { input: "software researcher", output: "Engineering" },
    { input: "solution architect", output: "Engineering" },
    { input: "staff advisory industrial designer", output: "Engineering" },
    { input: "thermal engineer", output: "Engineering" },
    { input: "thinkPad display engineer", output: "Engineering" },
    { input: "engineering manager mobile", output: "Engineering" },
    { input: "engineering manager, backend", output: "Engineering" },
    { input: "engineering manager, microservices platform", output: "Engineering" },
    { input: "product manager, technical", output: "Engineering" },
    { input: "senior software engineer, android", output: "Engineering" },
    { input: "software engineer, backend", output: "Engineering" },
    { input: "software engineer, data platfom", output: "Engineering" },
    { input: "software engineer, machine learning", output: "Engineering" },
    { input: "software engineer, site reliability", output: "Engineering" },
    { input: "software engineer, tool and infrastructure", output: "Engineering" },
    { input: "system engineer, corporate", output: "Engineering" },
    { input: "data scientist", output: "Engineering" },
    { input: "equity analyst", output: "Analysis" },
    { input: "executive officer", output: "Executive" },
    { input: "general examination department", output: "Finance & Accounting" },
    { input: "system audit", output: "Finance & Accounting" },
    { input: "produce manager", output: "Product" },
    { input: "wakana product development group leader", output: "Product" },
    { input: "head of marketing", output: "Marketing" },
    { input: "global development marketing intern", output: "Marketing" },
    { input: "senior marketing & operation director", output: "Marketing" },
    { input: "senior purchasing manager", output: "Purchasing" },
    { input: "global product manager", output: "Production" },
    { input: "technology consulting manager", output: "Production" },
    { input: "account management", output: "Account" },
    { input: "Ingeniero Informatico", output: "IT" },
    { input: "manager CAD IT", output: "IT" },
    { input: "it architect", output: "IT" },
    { input: "personalized internet assessor", output: "IT" },
    { input: "it application manager", output: "IT" },
    { input: "cloud specialist", output: "IT" },
    { input: "director cloud enterprise architect", output: "IT" },
    { input: "supplier management", output: "Logistics" },
    { input: "middleware sales", output: "Sales" },
    { input: "senior partner sales engineer", output: "Sales" },
    { input: "area vice president of commercial sales", output: "Sales" },
    { input: "certified career consultant, career development advisor cda, eap mental health councelor", output: "Human Resource" },
    { input: "client facing hr partner", output: "Human Resource" },
    { input: "human resources recruiter", output: "Human Resource" },
    { input: "innovation engagement manager", output: "Research and Development" },
    { input: "director, customer support", output: "Maintenance" },
    { input: "head of marketing", output: "Marketing" },
    { input: "global development marketing intern", output: "Marketing" },
    { input: "senior marketing & operation director", output: "Marketing" },
    { input: "senior purchasing manager", output: "Purchasing" },
    { input: "global product manager", output: "Production" },
    { input: "technology consulting manager", output: "Production" },
    { input: "sr manager account management", output: "Account" },
    { input: "ingeniero informatico", output: "IT" },
    { input: "manager cad it", output: "IT" },
    { input: "it architect", output: "IT" },
    { input: "personalized internet assessor", output: "IT" },
    { input: "it application manager", output: "IT" },
    { input: "cloud specialist", output: "IT" },
    { input: "cloud enterprise architect", output: "IT" },
    { input: "supplier management", output: "Logistics" },
    { input: "middleware sales", output: "Sales" },
    { input: "senior partner sales engineer", output: "Sales" },
    { input: "area vice president of commercial sales", output: "Sales" },
    { input: "certified career consultant, career development advisor cda, eap mental health councelor", output: "Human Resource" },
    { input: "ibm japan client facing hr partner", output: "Human Resource" },
    { input: "human resources recruiter", output: "Human Resource" },
    { input: "senior manager intenational business development", output: "Intenational Business Development" },
    { input: "customer support japan and apac", output: "Maintenance" },
    { input: "innovation engagement manager", output: "innovation / R&D" },
    { input: "senior contract specialist", output: "Legal, Administration" }
]);


const findDepartment = (position) => {
    
    let positionFromDB = localWordExtractor(position);
    console.log("<<< " + positionFromDB + " >>>");

    let department = intentClassifier.classify(positionFromDB); 

    return department;
}

module.exports = findDepartment;


/*
[
    { input: "cad web internet site information developer dev software", output: "IT" },
    { input: "ai cloud artificial intelligence", output: "IT" },
    { input: "it", output: "IT" },
    { input: "marketing", output: "Marketing" },
    { input: "sales", output: "Sales" },
    { input: "project", output: "Project" },
    { input: "design designing", output: "Designing" },
    { input: "designer", output: "Designing" },
    { input: "purchasing", output: "Purchasing" },
    { input: "production products product production manufacturing", output: "Production" },
    { input: "maintenance", output: "Maintenance" },
    { input: "customer support", output: "Maintenance" },
    { input: "store", output: "Store" },
    { input: "supplier", output: "Logistics" },
    { input: "quality", output: "Quality" },
    { input: "inspection", output: "Inspection" },
    { input: "packaging package", output: "Packaging" },
    { input: "financial", output: "Finance" },
    { input: "account accounting", output: "Account" },
    { input: "accounts", output: "Account" },
    { input: "research r&d", output: "Research & Development" },
    { input: "innovation", output: "Innovation" },
    { input: "human resource resources career", output: "Human Resource" },
    { input: "hr", output: "Human Resource" },
    { input: "international business", output: "Business Development" },
    { input: "security", output: "Security" },
    { input: "administration", output: "Administration" },
    { input: "contract legal", output: "Legal" }
]
*/