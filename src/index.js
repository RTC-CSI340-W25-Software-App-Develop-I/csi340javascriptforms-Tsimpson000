//Tyler Simpson

// Select the form from the DOM
const form = document.querySelector("form");

// Attach an event listener to the form
form.addEventListener("submit", (e) => {
 // Prevent the default form submission behavior
  e.preventDefault();

// Capture form data
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  // Call the renderConfirmation function with the captured data
  renderConfirmation(formData);
});


const renderConfirmation = (formData) => {
    const h2 = document.createElement("h2");
    h2.textContent = "Submission Confirmation";
  
  const nameP = document.createElement("p");
  nameP.textContent = formData.name;
  
  const emailP = document.createElement("p");
  emailP.textContent = formData.email;
  
  const phoneP = document.createElement("p");
  phoneP.textContent = formData.phone;
  
  const reasonP = document.createElement("p");
  reasonP.textContent = formData.reason;
  
  const messageP = document.createElement("p");
  messageP.textContent = formData.message;
  
  const section = document.querySelector("section");
  section.innerHTML = "";
  
  section.append(h2, nameP, emailP, phoneP, reasonP, messageP);
  };