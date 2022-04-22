
var personalDetails = [];

var initialPersonalDetails = [
  {
    fname: 'Jayesh', lname: 'Ingle', city: 'Shegaon', country: 'India'
  },
  {
    fname: 'Srikant', lname: 'Katla', city: 'New York', country: 'U.S.A'
  },
  {
    fname: 'Nishan', lname: 'Surya', city: 'Dubai', country: 'U.A.E'
  },
  {
    fname: 'Vipul', lname: 'Thakre', city: 'Dubai', country: 'U.A.E'
  }
];



function loadInitialData() {
  personalDetails = initialPersonalDetails;
  loadDetails();
}


function loadDetails() {
  var table = document.getElementById('detailsTable');
  table.innerHTML = '<tr><th>SL No</th><th>First Name</th><th>Last Name</th><th>City</th><th>Country</th>	</tr>';
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
    // insert at index 0 in array
    personalDetails.unshift(formDetails.data);
    loadDetails();
    clearForm();
  }
}

function addRowBottom() {
  const formDetails=validateFormData();
  if(formDetails.isValid)
  {
    // insert at end in array
    personalDetails.push(formDetails.data);
    loadDetails();  
    clearForm();
  }

}

function clearForm() {
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('city').value = '';
  document.getElementById('country').value = '';
}

function validateFormData()
{
  var _fname = document.getElementById('fname').value;
  var _lname = document.getElementById('lname').value;
  var _city = document.getElementById('city').value;
  var _country = document.getElementById('country').value;
  let _isValid = true;

  document.getElementById('errorInFname').innerHTML = '';
  document.getElementById('errorInLname').innerHTML = '';
  document.getElementById('errorInCity').innerHTML = '';
  document.getElementById('errorInCountry').innerHTML = '';
  document.getElementById('errorInForm').innerHTML = '';
  
  var nameRegx = /^[a-zA-Z]+$/;
  var cityRegx = /^([a-zA-Z]+[\s]*){1,5}$/;
  var countryRegx = /^([a-zA-Z]+\.?[\s]*){1,10}$/;
  if (_fname.trim() == "") {
    document.getElementById('errorInFname').innerHTML = '*Blank are not allowed';
    _isValid = false;
  } else if (_fname.length > 100 || !nameRegx.test(_fname)) {
    document.getElementById('errorInFname').innerHTML = "*Please Enter Valid First Name";
    _isValid = false;
  }

  if (_lname.trim() == "") {
    document.getElementById('errorInLname').innerHTML = '*Blank are not allowed';
    _isValid = false;
  } else if (_lname.length > 100 || !nameRegx.test(_lname)) {
    document.getElementById('errorInLname').innerHTML = "*Please Enter Valid Last Name";
    _isValid = false;
  }

  if (_city.trim() == "") {
    document.getElementById('errorInCity').innerHTML = '*Blank are not allowed';
    _isValid = false;
  } else if (_city.length > 100 || !cityRegx.test(_city)) {
    document.getElementById('errorInCity').innerHTML = "*Please Enter Valid City Name";
    _isValid = false;
  }

  if (_country.trim() == "") {
    document.getElementById('errorInCountry').innerHTML = '*Blank are not allowed';
    _isValid = false;
  } else if (_country.length > 100 || !countryRegx.test(_country)) {
    document.getElementById('errorInCountry').innerHTML = "*Please Enter Valid Country Name";
    _isValid = false;
  }

  if(_isValid == true) {
    const data = personalDetails.find(x => x.fname.toLowerCase() == _fname.toLowerCase() && x.lname.toLowerCase() == _lname.toLowerCase() && x.city.toLowerCase() == _city.toLowerCase() && x.country.toLowerCase() == _country.toLowerCase())
    if(data != null) {
      document.getElementById('errorInForm').innerHTML = "*Data is already present.";
      _isValid = false;
    }
  }

  const formDetails={
    isValid: _isValid,
    data:{fname: _fname, lname: _lname, city: _city, country: _country}
  }
  return formDetails;
}
