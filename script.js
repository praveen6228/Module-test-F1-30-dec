
  function submitForm() {
    // get form values
    var fname = document.getElementById("First Name").value;
    var lname = document.getElementById("Last Name").value;
    var email = document.getElementById("Email Address").value;
    console.log(fname,lname,email);
    if(fname && lname && email){
      alert("Form Submmited Sucessfully !");
    }
    else{
      alert("Please Fill the Mandatory fields");

    }

  }


