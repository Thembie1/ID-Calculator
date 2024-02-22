function calculateAge() {
  var idNumber = document.getElementById("idInput").value;
  var year = idNumber.substr(0, 2);
  var currentYear = new Date().getFullYear();
  var prefix = "";

  if (parseInt(year) > (currentYear % 100)) {
    prefix = "19";
  } else {
    prefix = "20";
  }

  var birthYear = prefix + year;
  var age = currentYear - parseInt(birthYear);

  document.getElementById("result").textContent = "Age: " + age;
}