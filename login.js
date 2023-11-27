document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check for valid username and password (dummy check)
    if (username === 'user' && password === 'password') {
      document.getElementById('message').innerHTML = 'Login successful!';
    } else {
      document.getElementById('message').innerHTML = 'Invalid username or password.';
    }
  });
  