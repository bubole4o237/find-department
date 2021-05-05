const findDepartment = require('./findDepartment.js');

let someData = `"PC Technical Solutions Consultant"
"Reporting Specialist"
"知的財産部"
"Deputy Head of Product Operation Dept. "
"Optical Designer"
"Decision Support Business Analyst"
"GCCS"
"Proposal Engineer"
"Principal Field Support Engineer"
"Connectivity Partner Business Manager"
"Vice President, Solution Engineering"
"Senior Security Solutions Architect"
"Technical Account Manager"
"Customer Operations Team Leader"
"Assistant to Project Manager"`;

let someArray = someData.split('\n');

someArray.forEach(data => {
    console.log(data);
    console.log(findDepartment(data));
});