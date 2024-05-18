function submitForm() {
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const otp = document.getElementById('otp').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Here you can implement your form submission logic
    // For demo purposes, just log the form data
    console.log('Username:', username);
    console.log('Mobile Number:', mobile);
    console.log('OTP:', otp);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  
    // Redirect to login page after successful form submission
    // window.location.href = 'login.html';
  }
  