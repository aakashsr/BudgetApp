function CreateItems(title, price, date) {
  this.title = title;
  this.price = price;
  this.date = date;
}

document.getElementById("addBtn").addEventListener("click", function () {
  var title = document.getElementById("title").value;
  var price = document.getElementById("price").value;
  var date = document.getElementById("date").value;
  //   console.log(title, price, date);
  var item = new CreateItems(title, price, date);
  console.log(item);
});
