const findDepartment = require('./findDepartment.js');

let someData = `Director, Marketing"
"Marketing Planner, Engineer"
"Rotating Equipment Engineer"
"Associate Consultant"
"Head of Japan Customer Experience Strategy"
"Freelance Marketing Consultant"
"Healthcare committe co-chair"
"Account Director - Sr.Director"
"Senior Mechanical Engineer"
"System Manager, 5G PoC Technical Coordinator"
"Consultant, M&A Unit, Strategy M&A Division"
"Manager, Operation Planning, Ops & IT"
"Chief Human Resources Officer"
"maneger"
"Site System Owner"
"Senior Director - Head of Japan HR and Sales HRBP"
"Senior Research Manager"
"HR Manager"
"Account Manager Enterprise Sales"
"Care Worker"
"Commercial Strategy & Sales Operation, Sr. Manager"
"Global Business Group Licensing Manager"
"Self-Employed Senior Engineering Consultant"
"Producer Of Web Services"
"Organization Manager"
"Cloud Solution Architect in Automotive Industry"
"Senior Principal Financial Analyst"
"designer"
"Associate - Enterprise Channel Manager - One Commercial Partner"
"Education Program Manager"
"Delivery Project Executive"
"Copilot System Analyst"
"Manager, General Affairs (Corporate Functions Lead)"
"Video Sales Specialist, Large Customer Sales"
"Partner Manager - Japan"
"Engineering Software Project Manager"
"Inside Sales Senior Manager"
"Distinguishe Engineer"
"PMO Leader, AP Services Strategy and Project Office"
"Director of Funding, Asia Pacific/Japan"
"Auditor  "
"User Interface Designer"
"Modern Workplace Solution Advisor, Global Black Belt "
"代表執行役社長/Japan Country Manager"
"과장"
"Associate Partner, Technology Consulting, EY Advisory & Consulting Co., Ltd."
"Sr. Account Manager (Hotel/OTA)"
"General Procurement Manager"
"Accounts Executive"
"HR Senior leader"
"Demand program expert, Marketing"
"Master principal software engineer"
"Enterprise-Class Technical Support Team Supervisor"
"ゼネラルプロデューサー"
"CS Communications Manager"
"DaaS Portfolio Specialist"
"Vice President of Sales APAC"
"CRM Delivery Project Executive"
"deputy director"
"Global Talent Acquisition /Recruiter"
"Infrastructure Architect, Professional Services"
"Partner Channel Marketing Manager"
"Manager, Technical Consulting - Manufacturing"
"Head of Technology Solutions"
"シニアビジネスプロデューサー"
"Advisory Associate"
"Transactional Accounting Manager"
"Senior Director, Global Services"
"RC, Business Partner Management"
"Component Lead Engineer"
"Regional Business Controller - Int'l (APAC/MEA) - Cloud and Artificial Intelligence Controllership "
"Account Executive in Microsoft Consulting Services"
"General Manager Business Development"`;

let someArray = someData.split('"\n"');

someArray.forEach(data => {
    console.log(data);
    console.log(findDepartment(data));
});