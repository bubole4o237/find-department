const findDepartment = require('./findDepartment.js');

let someData = `CEO
Regional Director
ECコンサルタント
Global Brand and Platform Group
Project Mananger for GDPR DSR project
Application Engineer
Marketing Director
In-House Interpreter/Translator
Engineering Office Team
Consultant
Software Engineer
Technical Product Manager
Finance Manager (Head of Finance and HR)
Software Engineer
Software Engineer
Head of Client Integration
Product Manager
Software Engineer
Associate Sales Accounting Analyst
Solution Advisor
Enterprise Marketing Team Leader, Japan 
Security Engineer
Software Engineer
Chief Executive Officer
Technical Account Manager
Managing Director 常務取締役
Infrastructure System / Data & BI Engineer, Consultant
Regional Financial Controller for Asia-Pacific and Japan
Developer Events / Activities Coordinator`;

let someArray = someData.split('\n');

someArray.forEach(data => {
    console.log(data);
    console.log(findDepartment(data));
});