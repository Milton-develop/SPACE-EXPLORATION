//reload page after successful submission
// when the form is submitted, the data is sent to the Formspree API using a POST request. If the request is successful, the page is reloaded to clear the form. If there is an error, an alert is displayed to notify the user
function reloadPage() {
    window.location.reload();
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://formspree.io/f/xeoaalyn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully');
            window.location.reload(); // Reload the page
        } else {
            alert('Failed to submit form');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
    });
});
    
 
// This function validates the form by checking if the name, email, and message fields are filled out. If any of the fields are empty, an alert is displayed to notify the user.
function validateForm() {      
        var name = document.forms["contactForm"]["name"].value;
        var email = document.forms["contactForm"]["email"].value;
        var message = document.forms["contactForm"]["message"].value;
        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }
        if (message == "") {
            alert("Message must be filled out");
            return false;
        }
    }

    function toggleEmail(show) {
        const emailField = document.getElementById("emailField");
        if (show) {
            emailField.style.display = "block";
            emailField.setAttribute("required", "true");
        } else {
            emailField.style.display = "none";
            emailField.removeAttribute("required");
        }
    } 

    // Hide the email field initially
    document.getElementById("emailField").style.display = "none";

    
