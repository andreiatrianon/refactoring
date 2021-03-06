// data is a variable from data.js
$(document).ready(() => {
  insertNamesOnSelector();
  $('.mySelector').change(inserTasksOnList);
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

function inserTasksOnList() {
  $(".tasksList").html = "";
  let selectedUserName = $(this).find(":selected").text();
  filteredArray = getTasksFromDB(selectedUserName);
  createItemsOnList(filteredArray);
  setTaskCompleteOnList(filteredArray);
}

function getTasksFromDB(selectedUserName) {
  // o _ é o Loadash
  return filteredArray = _.filter(data, {name: selectedUserName});
}

function createItemsOnList(filteredArray) {
  filteredArray.map((task) => {
    $('.tasksList').append(`
    <li data-id="${task.id}" class="tasks-list-item"><span>${task.title}</span></li>
    `);
  });
}

function setTaskCompleteOnList(filteredArray) {
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
}