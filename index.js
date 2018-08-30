// data is a variable from data.js
$(document).ready(() => {

  insertNamesOnSelector();

  var seletor = document.getElementsByClassName("mySelector")[0];
  seletor.addEventListener('change', function(e) {
    var taskList = document.getElementsByClassName("tasksList")[0];
    taskList.innerHTML = "";

    let selectedUserName = e.target.value;

    // o _ é o Loadash. O que é isso?
    var filteredArray = _.filter(data, {name: selectedUserName});




    for (task of filteredArray) {
      var list = document.createElement("li");
      let text = document.createElement("span");
      list.dataset.id=task.id;
      text.textContent = task.title;
      list.appendChild(text);
      taskList = document.getElementsByClassName("tasksList")[0];
      list.className = "tasks-list-item";
      taskList.appendChild(list);
    }


    //risca o texto
    var allItensFromList = document.getElementsByTagName("li");
    for (listItem of allItensFromList) {
      let itemId = listItem.getAttribute('data-id');
      for (task of filteredArray) {
        if (parseInt(itemId) == task.id) {
          if (task.completed) {
            listItem.style = "text-decoration: line-through;"
          }
        }
      }


    }
  });
});

function insertNamesOnSelector() {
  var usersName = getUserNamesFromDB();
  createOptionsOnSelector(usersName);
}

function getUserNamesFromDB() {
  var usersName = [];
  data.map((userData) => {
    !usersName.includes(userData.name) ? usersName.push(userData.name) : null;
  });
  return usersName;
}

function createOptionsOnSelector(userNamesFromDB) {
  userNamesFromDB.map((name) => {
    $(".mySelector").append(`<option value="${name}">${name}</option>`);
  });
}
