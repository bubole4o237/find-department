const findDepartment = require('./findDepartment.js');

let position = "Vice President, Distribution Industry Sales";
// let position = "IT Application Manager";

let department = findDepartment(position);

if (department.length > 0) {
    console.log(department);
    console.log('The position you are looking for is for Department: ' + department);
} else {
    console.log('There is no match!');
}

