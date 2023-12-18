function CompletePayment() {
  var reg1 = /^[6-9]\d{9}$/;
  var emailid = document.slot_book.InputEmail.value;
  var mobileno = document.slot_book.mobileno.value;
  var age = document.slot_book.age.value;
  var slot = document.slot_book.slot.value;
  var x = 0;

  if (emailid == "" && mobileno == "" && age == "" && slot == "") {
    alert("Please fill the details");
    x = 1;
  } else if (emailid == null || emailid == "") {
    alert("Please enter email address");
    x = 1;
  } else if (mobileno == null || mobileno == "") {
    alert("Please enter mobile number");
    return false;
  } else if (!reg1.test(mobileno) || mobileno.length !== 10) {
    alert(
      "Mobile number starts with either 6/7/8/9 and must be 10 digits only"
    );
    x = 1;
  } else if (
    age == null ||
    age == "" ||
    isNaN(parseInt(age)) ||
    age < 18 ||
    age > 65
  ) {
    alert("Age must be a valid number between 18 and 65");
    x = 1;
  } else if (slot == null || slot == "") {
    alert("Please select the slot");
    x = 1;
  }

  if (x == 1) return false;
  else {
    alert("You booked a slot for Yoga Class and proceed for payment!");
    return true;
  }
}
