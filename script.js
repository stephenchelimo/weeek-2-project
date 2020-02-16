 
var maleNames = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
};
var femaleNames = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday: 'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
};
function ClearFields() {

    document.getElementById("d").value = "";
    document.getElementById("m").value = "";
    document.getElementById("yy").value = "";
    document.getElementsByName("gd").value = "";
    
    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "none";
    document.getElementById('three').style.display = "none";
    document.getElementById('four').style.display = "none";
    document.getElementById("ans").style.display = "none";
}
function validation() {
    var date = document.getElementById("d").value;
    
    var month = document.getElementById("m").value;
    var year = document.getElementById("yy").value;
    var gen = document.getElementsByName("gd");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if(isNaN(date) || date === null || date === "" || date < 1 || date > 31){
       
        document.getElementById('one').innerHTML = "invalid day";
        document.getElementById('one').style.color = "red"
        alert("invalid date");
        return false;
    }
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isNaN(month) || month=== "" || month ===null || month <1 || month>12){
        document.getElementById('two').innerHTML = "invalid month";
        document.getElementById('two').style.color = "red"
        alert("invalid month");
       return false;
    }
     if(month===1 || month>2){
  if (date>ListofDays[month-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if(month===2){
  var lyear = false;
  if ( (!(year % 4) && year % 100) || !(year % 400)) 
  {
      
  lyear = true;
  }
  if ((lyear==false) && (date>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (date>29))
  {
  alert('Invalid date format!');
  return false;
  }
}
if(isNaN(year) || year === "" ||year === null || year <1900 || year > currentYear){
  document.getElementById('three').innerHTML = "invalid year";
  document.getElementById('three').style.color = "red"
      alert("invalid year");
      return false;
}
  if (gender[0].checked === false && gender[1].checked === false) {
      document.getElementById('four').innerHTML = "select gender";
      document.getElementById('four').style.color = "red"
      alert('select gender');
      
   } else {
       for (i = 0; i < gen.length; i++) {
           if (gender[i].checked){
              alert(genger[i].value);
                  var gender = gender[i].value;
       }
                  var userInputs ={
                      userDate: date,
                      userMonth: month,
                      userYear: year,
                      userGender: gend
                  };
                  
                  return userInputs;
                  }
                  
              
              }           

}