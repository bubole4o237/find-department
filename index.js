const findDepartment = require('./findDepartment.js');

let position = "Director, Omni Channel Marketing";

let department = findDepartment(position);

if (department.length > 0) {
    console.log(department);
    console.log('The position you are looking for is for Department: ' + department);
} else {
    console.log('There is no match!');
}

