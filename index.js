const findDepartment = require('./findDepartment.js');

let position = "Image Processing Senior Reseacher";

let department = findDepartment(position);

if (department.length > 0) {
    console.log(department);
    console.log('The position you are looking for is for Department: ' + department);
} else {
    console.log('There is no match!');
}

