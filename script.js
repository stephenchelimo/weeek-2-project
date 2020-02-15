 
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