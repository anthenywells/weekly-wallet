"use strict";

$(document).ready(() => {

  const expenceList = [];
  let counter = 0;
  
  function openModal() { //function that opens the Expense Input Modal when the "Add Expense" button is clicked
    $(".open").on("click", function(){
        $(".popup, .popup-content").addClass("active"); //gives the DOM elemenets .popup and .popup-content a class of active
        });
        $(".close, .popup").on("click", function(){ // removes the class of active when the user "adds" a new expense
            $(".popup, .popup-content").removeClass("active");
        });
    }
openModal();

    $("#expButton").on("click", function(){
      if ($("#category").val() === "Entertainment") {
        expenceList.push({
          input: $(".input").val(),
          id: counter++
        });
        $("#expenseList").append(`
        <li class="entertainment">${$("#input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
        );
      } else if ($("#category").val() === "Bills") {
        expenceList.push({
          input: $(".input").val(),
          id: counter++
        });
        $("#expenseList").append(`
        <li class="bills">${$("#input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
        );
      } else if ($("#category").val() === "Food") {
        expenceList.push({
          input: $(".input").val(),
          id: counter++
        });
        $("#expenseList").append(`
        <li class="food">${$("#input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
        );
      } else if ($("#category").val() === "Clothing") {
        expenceList.push({
          input: $(".input").val(),
          id: counter++
        });
        $("#expenseList").append(`
        <li class="clothing">${$("#input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
        );
      } else if ($("#category").val() === "Misc") {
        expenceList.push({
          input: $(".input").val(),
          id: counter++
        });
        $("#expenseList").append(`
        <li class="misc">${$("#input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
        </li>`
        );
      }
    });
  });