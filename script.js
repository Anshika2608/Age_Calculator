function calculate_age() {
  let mes = document.getElementById("alert");
  let birth = document.getElementById("dob").value;
  if (!birth) {
    mes.style.visibility = "visible";
    document.getElementById("alert").innerHTML = "Enter your Date Of Birth!";
    return;
  }
  let date = new Date(birth);
  let currentDate = new Date();
  let year = currentDate.getFullYear() - date.getFullYear();
  let month = currentDate.getMonth() - date.getMonth();
  let days = currentDate.getDate() - date.getDate();
  let age = document.getElementById("birthDate");

  if (days < 0) {
    month--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (month < 0) {
    year--;
    month += 12;
  }

  if (date > currentDate) {
    mes.style.visibility = "visible";
    document.getElementById("alert").innerHTML ="Enter your correct Date Of Birth!";
    age.innerHTML = "";
  }
  else {
    age.innerHTML ="Your age is " +year +" years " +month +" months and " +days + " days.";
  }
}
