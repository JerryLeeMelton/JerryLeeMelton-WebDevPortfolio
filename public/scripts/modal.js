let modalBtns = $(".modal-button");
// let modalBgs = $(".modal-bg");
let closeBtns = $(".modal-close");

modalBtns.on("click", function(event) {
  $("#" + this.name)[0].classList.add("modal-active");
});

// modalBgs.on("click", function(event) {
//   $("#" + this.getAttribute("name"))[0].classList.remove("modal-active");
// });

closeBtns.on("click", function(event) {
  $("#" + this.name)[0].classList.remove("modal-active");
});
