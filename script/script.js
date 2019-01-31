"use strict";

$(document).ready(() => {

function openModal() { //function that opens the Expense Input Modal when the "Add Expense" button is clicked
    $(".open").on("click", function(){
        $(".popup, .popup-content").addClass("active"); //gives the DOM elemenets .popup and .popup-content a class of active
        });
        $(".close, .popup").on("click", function(){ // removes the class of active when the user "adds" a new expense
            $(".popup, .popup-content").removeClass("active");
        });
    }
openModal();
    function enterBudget() {  //function that when clicked hides the enter budget div. also will push the amount entered into the totalBudget array.  
        $(".submit").on("click", function() {
            $(".open").addClass("active");
        });
        $(".submit").on("click", function() {
            $(".budgetFactor").replaceWith("total");
        });
    }
enterBudget();
//     function deleteObject() {
//         $(".delete").on("click", function(){
//              // expenceList.splice(expenceList.findIndex(item => expenceList.id === $(e.target).parent(attr("index"))), 1);
//              // $(e.target).parent().remove();
//             console.log("splice");
//         });
//     }
// deleteObject();x
function expenseTotal() {
    

}
let expenceList = [];
let totalBudget = [];
let counter = 0;
    $("#expButton").on("click", function(){
      if ($("#category").val() === "Entertainment") {
        expenceList.push({
          input: $("#input").val(),
          amount: parseInt($("#amount-input").val()),
          id: counter++
        });
        $("#expenseList").append(`
        <li class="entertainment">${$("#input").val()} $${$("#amount-input").val()}
        <button class="delete"><i class="fas fa-trash"></i></button>
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
    });
  });