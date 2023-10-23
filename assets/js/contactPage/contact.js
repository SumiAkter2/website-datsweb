console.log("from contact.js");

const form = document.getElementById("contact-form");
const responseDiv = document.getElementById("responseDiv");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;

  //   const formData = new FormData(name, email, message, subject);
  const data = {
    from_name: name,
    email_id: email,
    message: message,
    subject: subject,
  };
  console.log(data);

  emailjs.send("service_civgeaa", "template_op323wr", data).then(
    function (response) {
      console.log("Email sent successfully", response);
      responseDiv.innerHTML =
        "You have submitted your contact details successfully!";
    },
    function (error) {
      console.error("Email could not be sent", error);
      responseDiv.innerHTML = "Email could not be sent. Please try again.";
    }
  );

  form.reset();
});
