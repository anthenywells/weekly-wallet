"use strict";

// chart.js 
new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Bills", "Grocery", "Clothing", "Entertainment", "Misc."],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#47833e", "#6ba34f","#75d06c","#a2caa2","#caeaca"],
      data: [25,25,25,25,25]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Total Expenses'
    }
  }
}); 


$(document).ready(() => {
  let expenceList = [];
// budget button
  function enterBudget() {  //function that when clicked hides the enter budget div. also will push the amount entered into the totalBudget array.  
    // $(".myButton").on("click", function () {
    //   $(".addButton").addClass("active");
    // });
    let userTotal = 0;
    $(".myButton").on("click", function (e) {
      if (userTotal === 0) {
        userTotal = $("#input-total").val();
        e.preventDefault(); // when submit is clicked, the user input is stored in user total and replaces the question on the screen
        $(".budgetFactor").append(`<p> Budget Total = $${userTotal}</p>`);
      } else if (userTotal !== 0){
        userTotal = $("#input-total").val();
        $(".budgetFactor").text(`Budget Total = $${userTotal}`);
        console.log(userTotal);
      }
    });
  }
// expense form
  function openModal() { //function that opens the Expense Input Modal when the "Add Expense" button is clicked
    $(".addButton").on("click", function (e) {
      e.preventDefault(); // needed this to stop the event from constantly refreshing
      $("#form").css('display','block'); //gives the form div a display class of block
    });
    $(".close, .popup").on("click", function () { // removes the class of active when the user "adds" a new expense
      $(".popup, .popup-content").removeClass("active");
    });
  }



  openModal();
  enterBudget();

  function deleteObject() {
    $("#expenseList").on("click", ".entertainment", function () {
      $().remove();
    });
  }
  deleteObject();

  // let expenceList = [];
  // let totalBudget = [];
  let counter = 0;
  

  $("#expButton").on("click", function (e) {
    console.log("hello")
    if ($("#category").val() === "Entertainment") {
    console.log("hi")

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
    // console.log(expenceList[0].amount);
    e.preventDefault();
  });




   


// custom select button
var x, i, j, selElmnt, a, b, c;
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
      var y, i, k, s, h;
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
var x, y, i, arrNo = [];
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
function deleteObject() {
  $("#delete").on("click", function () {
    console.log("delete");
  });
}
deleteObject();