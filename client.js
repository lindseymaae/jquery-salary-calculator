
//The application should have an input form that collects _employee first name, 
//last name, ID number, job title, annual salary_.
//A 'Submit' button should collect the form information, 
//store the information to calculate monthly costs, append information to the 
//DOM and clear the input fields.
//Using the stored information, 
//calculate monthly costs and append this to the to DOM.
//If the total monthly cost exceeds $20, 000, add a red background color to the total monthly cost.
console.log('client.js has been loaded');

$(document).ready(onReady);
let employeeInfo = [];
let employeeList = [];
let salaries=[];
let monthlySalaries=[];
function onReady() {
    console.log('jquery is loaded');
    $('#inputButton').on('click', addEmployee);
    $('#employeeTable').on('click', '.deleteButton' ,  deleteEmployee);
}

function addEmployee() {
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
    employeeList.push(employeeInfo);
    salaries.push(employeeSalary);
    console.log(salaries);
    
    
    $('#employeeTable').append(`
        <tr> 
        <td> 
        ${employeeFirstName} 
        </td> 
        <td> 
        ${employeeLastName} 
        </td> 
        <td>
        ${employeeIdNumber}
        </td>
        <td>
        ${employeeJobTitle}
        </td>
        <td>
        ${employeeSalary}
        </td>
        <td>
        <button class="deleteButton">Delete</button>
        </td>
        </tr>
 
    `);//add input to table 
    emptyFields();//create function to clear input fields
    //create a function to calculate monthly costs
    monthlyCosts(employeeSalary);
}

function emptyFields(){
    $('#firstNameInput').val('');//empty iputs
    $('#lastNameInput').val('');
    $('#IDnumberInput').val('');
    $('#jobTitleInpu').val('');
    $('#annualSalaryInput').val('');

}//clear input fields

function monthlyCosts(num1){
    let num2 = num1 /12;
    monthlySalaries.push(num2)
console.log(monthlySalaries);
    addtogether();
    }//get individual monthly salaries
  
function addtogether(){
    let totalMonthly=0;
    for(let i=0; i < monthlySalaries.length; i++){
        totalMonthly =  totalMonthly + monthlySalaries[i];        
    }//add together individual monthly salaries for total monthly cost
    console.log(Math.round(totalMonthly));
    $('#monthlyCosts').empty();
    $('#monthlyCosts').append('Total Monthly Costs:', Math.round(totalMonthly));
}
    function deleteEmployee(){
        console.log('in delete employee');
        $(this).closest('tr').remove();

    }

