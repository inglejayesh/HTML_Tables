
var personalDetails = [];

var initialPersonalDetails = [
  {
    fname: 'Jayesh', lname: 'Ingle', city: 'Shegaon', country: 'India'
  },
  {
    fname: 'Srikant', lname: 'Katla', city: 'Mumbai', country: 'India'
  }
];



function loadInitialData() {
  personalDetails = initialPersonalDetails;
  loadDetails();
}


function loadDetails() {
  var table = document.getElementsByTagName('table')[0];
  table.innerHTML = '<tr><th>SL NO</th><th>First Name</th><th>Last Name</th><th>City</th><th>Country</th>	</tr>';
  for (i = 0; i < personalDetails.length; i++) {
    var newRow = table.insertRow(i + 1);
    newRow.insertCell(0).innerHTML = i + 1;
    newRow.insertCell(1).innerHTML = personalDetails[i].fname;
    newRow.insertCell(2).innerHTML = personalDetails[i].lname;
    newRow.insertCell(3).innerHTML = personalDetails[i].city;
    newRow.insertCell(4).innerHTML = personalDetails[i].country;
  }
}

function addRowTop() {
  const formDetails=validateFormData();
  if(formDetails.isValid)
  {
    personalDetails.unshift(formDetails.data);
    loadDetails();  
  }
}

function addRowBottom() {
  const formDetails=validateFormData();
  if(formDetails.isValid)
  {
    personalDetails.push(formDetails.data);
    loadDetails();  
  }

}

function validateFormData()
{
  var table = document.getElementsByTagName('table')[0];
  var _fname = document.getElementById('fname').value;
  var _lname = document.getElementById('lname').value;
  var _city = document.getElementById('city').value;
  var _country = document.getElementById('country').value;

  /*
  let _isValid = true
  clear all error message (setempty)innerHtml
  const regEx = 
  if(fnameNotValid==false)
  {
    set error message fname is not valid
    _isValid = false;
  }
  if(lnameNotValid)
  {
    set error message lname is not valid
    _isValid = false;
  }
  if(cityNotValid)
  {
    set error message city is not valid
    _isValid = false;
  }
  if(countryNotValid)
  {
    set error message country is not valid
    _isValid = false;
  }
  */

  const formDetails={
    isValid:true,
    data:{fname: _fname, lname: _lname, city: _city, country: _country}
  }
  return formDetails;
}