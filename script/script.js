"use strict";
//Run this function when the document has finished loading
$(document).ready(() => {
// push expenses to expenseList array 
function expPush(){
  expenseList.push({
    input: $("#myExpense").val(),
    amount: parseFloat($("#expPrice").val()).toFixed(2),
    id: counter++
  });
};
//append expenses to overflow list
function expAppend(expen){
  $("#expenseList").append(`
      <li class="${expen}">${$("#myExpense").val()} $${parseFloat($("#expPrice").val()).toFixed(2)}
      </li>`
    );
};
// function to add expense data to expense variables
function addExp(num, expen) {
  data.splice(num,1, expen)
  chart.update();
};

let totalBudget = 0; let totalExpense = 0; let expenseList = [];
let entertainment = 0; let food = 0; let clothing = 0; let bills = 0; let misc = 0;
let counter = 0;

// stores and displays user budget on Try Now button click
//updates total budget text if reentered
$('#myButton').on('click', function(event) {
  event.preventDefault();
    totalBudget = parseFloat($('#myBudget').val()).toFixed(2);
    $(".totalBudget").text(`${totalBudget}`);
  //clears input field
  $("#myBudget").val("");
});

//Try Now button click scrolls to #main section
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position
	}, 400, 'linear' );
});

//diable Add Expense button until a expPrice has been input 
// $('#myExpButton').attr('disabled',true);
//     $('#expPrice').keyup(function(){
//         if($(this).val().length !=0)
//             $('.#myExpButton').attr('disabled', false);            
//         else
//             $('#myExpButton').attr('disabled',true);
//     });


// Add Expense button adds expenses to overflow list
$("#myExpButton").on("click", function (e) {
  e.preventDefault(); //prevent page refresh on form submit

    //stores and displays totalExpense variable
    totalExpense += parseInt($('#expPrice').val());
    $(".totalExpense").text(`${totalExpense}`);
    //updates total budget to reflect expenses
    totalBudget -= parseInt($('#expPrice').val());
    $(".totalBudget").text(`${totalBudget}`);
  

  if ($("#category2").val() === "Entertainment") {
    expPush();
    expAppend("entertainment");
    entertainment += parseInt($("#expPrice").val())
    addExp(0, entertainment);    
  } 
  else if ($("#category2").val() === "Food") {
    expPush();
    expAppend("food");    
    food += parseInt($("#expPrice").val())
    addExp(1, food);
  } 
  else if ($("#category2").val() === "Clothing") {
    expPush();
    expAppend("clothing");
    clothing += parseInt($("#expPrice").val())
    addExp(2, clothing);
  } 
  else if ($("#category2").val() === "Bills") {
    expPush();    
    expAppend("bills");
    bills += parseInt($("#expPrice").val())
    addExp(3, bills);
  } 
  else if ($("#category2").val() === "Misc") {
    expPush();
    expAppend("misc");
    misc += parseInt($("#expPrice").val())
    addExp(4, misc);    
  } else {
    expPush();
    expAppend("misc");
    misc += parseInt($("#expPrice").val())
    addExp(4, misc); 
  }
  //clear all input fields
  $("#myExpense, #expPrice, #category2").val("");

  // $(".delete").on("click", function (e) {
  //   // Find the matching element in foodList
  //   expenseList.splice(expenseList.findIndex(expense => expense.id === Number($(e.target).parent().attr("index"))), 1);
  //   // Remove the matching element from the DOM
  //   $(e.target).parent().remove();
  //   updateData();
  // });
  
  //open WARNING message if user spent too much
  if (totalBudget <= 0) {
    $("#warning").css("display", "block")
  }
});


let data = [entertainment, food, clothing, bills, misc]
// chart.js 
  let chart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Entertainment", "Food", "Clothing", "Bills", "Misc."],
      datasets: [{
        data: data,
        backgroundColor: ["#47833e", "#6ba34f","#75d06c","#a2caa2","#caeaca"],
      }]
    }
  });    



$("#myButton").on("click", function(){
  $("#myModal").css("display", "block")
}); 
// Add Button opens modal
$("#addButton").on("click", function(){
  $("#myModal").css("display", "block")
}); 
//X closes modal
$(".close").on("click", function(){
  $("#myModal").css("display", "none")
  $("#warning").css("display", "none")

})
//clicking outside of the modal closes the modal
$(window).on('click', function(e){
  if(e.target.id == 'myModal'){
      $('#myModal').css("display", "none");
      $('#warning').css("display", "none");
  }
});




// Custom Select Button
let x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
});