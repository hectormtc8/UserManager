$(document).ready(function() {
   // on ready
});


async function registrarUsuario() {
  let data = {};
  data.name = document.getElementById('txtName').value;
  data.lastName = document.getElementById('txtLastName').value;
  data.email = document.getElementById('txtEmail').value;
  data.password = document.getElementById('txtPassword').value;

  let repeatPassword = document.getElementById('txtRepeatPassword').value;

  if (repeatPassword !== data.password) {
    alert('Password in both fields must be the same.');
    return;
  }

  const request = await fetch('api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  alert("Account created successfully!");
  window.location.href = 'login.html'

}
