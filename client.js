//The application should have an input form that collects _employee first name, 
//last name, ID number, job title, annual salary_.
//A 'Submit' button should collect the form information, 
//store the information to calculate monthly costs, append information to the 
//DOM and clear the input fields.
//Using the stored information, 
//calculate monthly costs and append this to the to DOM.If the total monthly cost exceeds $20, 000, add a red background color to the total monthly cost.
console.log('client.js has been loaded');

$(document).ready(onReady);
let employeeInfo = [];
let employeeList = [];
function onReady() {
    console.log('jquery is loaded');
    $('#inputButton').on('click', getInfo)
}

function getInfo() {
    console.log('submit button working');
    let employeeFirstName = $('#firstNameInput').val();
    console.log(employeeFirstName);
    let employeeLastName = $('#lastNameInput').val();
    console.log(employeeLastName);
    let employeeIdNumber = $('#IDnumberInput').val();
    console.log(employeeIdNumber);
    let employeeJobTitle = $('#jobTitleInpu').val();
    console.log(employeeJobTitle);
    let employeeSalary = $('#annualSalaryInput').val();
    console.log(employeeSalary);

    employeeInfo.push(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeSalary);

    console.log(employeeInfo);

    employeeList.push(employeeInfo);

    console.log(employeeList);
    





}