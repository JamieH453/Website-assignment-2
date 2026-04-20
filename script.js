function validateForm() {

  const name  = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const job = document.getElementById("job").value;





  if (name === "") {
    alert("Please enter your name!");
    return;
  }

if (job =="") {
  alert("please enter the job you are applying for")
  return;
}


  if (email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }

  if (phone=="") {
alert("please enter your phone number")
   return;
  }

 {
  alert("Form submitted!");

}

SubmitEvent.message = "Form submitted successfully look out for your confirmation email";

document.getElementById("success")
  .style.display = "block";}

  emailjs.init({ publicKey: "JXKG7huKtk_bKbwXL" }); 

emailjs.send(
  "service_ry8oy3m",        
  "template_8g6dgvv",       
  { 
    from_name:  document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message:    document.getElementById("message").value
  }
);

            