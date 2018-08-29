// data is a variable from data.js
$(document).ready(() => {
  var usersName = [];
  for (userData of data) {
    if (!usersName.includes(userData.name)) {
      usersName.push(userData.name);
    }
  }

  for (name of usersName) {
    $(".meuSeletor").append(`<option value="${name}">${name}</option>`);
  }
});
