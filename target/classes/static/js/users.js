// Call the dataTables jQuery plugin
$(document).ready(function() {
    fetchUsers();
  $('#users').DataTable();
    updateEmail();
});

function updateEmail() {
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}


async function fetchUsers() {
  const request = await fetch('api/users', {
    method: 'GET',
    headers: getHeaders()
  });
  const users = await request.json();
  let listHtml = '';
  for (let user of users) {
    let deleteButton = '<a href="#" onclick="deleteUser(' + user.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let phoneString = user.phone == null ? '-' : user.phone;
    let userHtml = '<tr><td>'+user.id+'</td><td>' + user.name + ' ' + user.lastName + '</td><td>'
                    + user.email+'</td><td>'+phoneString
                    + '</td><td>' + deleteButton + '</td></tr>';
    listHtml += userHtml;
  }

document.querySelector('#users tbody').outerHTML = listHtml;

}

async function deleteUser(id) {

  if (!confirm('are you sure you want to delete this user?')) {
    return;
  }

 const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}

function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}