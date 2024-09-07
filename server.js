document.getElementById('btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Create a JSON object to store the data
  const userData = {
      name: name,
      email: email,
      username: username,
      password: password
  };

  // Log the JSON data to the console (or you can save it locally, send it to a server, etc.)
  console.log('User Data in JSON:', JSON.stringify(userData));

  // Save the JSON data to local storage (optional)
  localStorage.setItem('userData', JSON.stringify(userData));

  // You can display a message or redirect the user after submission
  alert('Sign up successful! Data saved as JSON.');
});
