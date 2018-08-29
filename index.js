// data is a variable from data.js
$(document).ready(() => {
  var usersName = [];
  for (userData of data) {
    if (!usersName.includes(userData.name)) {
      usersName.push(userData.name);
    }
  }

  for (name of usersName) {
    $(".mySelector").append(`<option value="${name}">${name}</option>`);
  }

  var seletor = document.getElementsByClassName("mySelector")[0];
  seletor.addEventListener('change', function(e) {
    let selectedUserName = e.target.value;
    
    // o _ vem do Loadash. O que é isso?
    var filteredArray = _.filter(data, {name: selectedUserName});


    for (post of filteredArray) {
      var list = document.createElement("li");
      const header = document.createElement("span");
      header.textContent = "O que a " + selectedUserName + " disse:";
      let text = document.createElement("span");
      text.textContent = post.text;
      list.appendChild(header);
      list.appendChild(text);
      postList = document.getElementsByClassName("posts-list")[0];
      postList.appendChild(list);
    }
  });
});
