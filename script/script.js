"use strict";

$(document).ready(() => {
  let expenceList = [];
  function openModal() { //function that opens the Expense Input Modal when the "Add Expense" button is clicked
    $(".addButton").on("click", function (e) {
      e.preventDefault(); // needed this to stop the event from constantly refreshing
      $(".popup, .popup-content").addClass("active"); //gives the DOM elemenets .popup and .popup-content a class of active
    });
    $(".close, .popup").on("click", function () { // removes the class of active when the user "adds" a new expense
      $(".popup, .popup-content").removeClass("active");
    });
  }
  openModal();
  function enterBudget() {  //function that when clicked hides the enter budget div. also will push the amount entered into the totalBudget array.  
    $(".submit").on("click", function () {
      $(".addButton").addClass("active");
    });
    $(".submit").on("click", function (e) {
      e.preventDefault(); // when submit is clicked, the user input is stored in user total and replaces the question on the screen
      const userTotal = $("#input-total").val();
      $(".budgetFactor").append(`<p> Budget Total = $${userTotal}</p>`);
      console.log(userTotal);
    });
  }
  enterBudget();

  function deleteObject() {
    $("#expenseList").on("click", ".entertainment", function () {
      $().remove();
    });
  }
  deleteObject();

  //let expenceList = [];
  let totalBudget = [];
  let counter = 0;
  $("#expButton").on("click", function (e) {
    e.preventDefault();
    if ($("#category").val() === "Entertainment") {
      expenceList.push({
        input: $("#input").val(),
        amount: parseInt($("#amount-input").val()),
        id: counter++
      });
      $("#expenseList").append(`
        <li class="entertainment">${$("#input").val()} $${$("#amount-input").val()}
        <button id="delete"><i class="fas fa-trash"></i></button>
        </li>`
      );
    } else if ($("#category").val() === "Bills") {
      expenceList.push({
        input: $("#input").val(),
        amount: parseInt($("#amount-input").val()),
        id: counter++
      });
      $("#expenseList").append(`
        <li class="bills">${$("#input").val()} $${$("#amount-input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
      );
    } else if ($("#category").val() === "Food") {
      expenceList.push({
        input: $("#input").val(),
        amount: parseInt($("#amount-input").val()),
        id: counter++
      });
      $("#expenseList").append(`
        <li class="food">${$("#input").val()} $${$("#amount-input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
      );
    } else if ($("#category").val() === "Clothing") {
      expenceList.push({
        input: $("#input").val(),
        amount: parseInt($("#amount-input").val()),
        id: counter++
      });
      $("#expenseList").append(`
        <li class="clothing">${$("#input").val()} $${$("#amount-input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
      );
    } else if ($("#category").val() === "Misc") {
      expenceList.push({
        input: $("#input").val(),
        amount: parseInt($("#amount-input").val()),
        id: counter++
      });
      $("#expenseList").append(`
        <li class="misc">${$("#input").val()} $${$("#amount-input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
      );
    }
    console.log(expenceList);
    console.log(expenceList[0].amount);
  });
});
function deleteObject() {
  $("#delete").on("click", function () {
    console.log("delete");
  });
}
deleteObject();