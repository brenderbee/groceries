$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var items = ["item0","item1", "item2", "item3", "item4"];
    var userItems = [];
    items.forEach(function(item) {
      var userInput = ($("#" + item).val()).toUpperCase();
      userItems.push(userInput);
    });

    userItems.sort();

    userItems.forEach(function(item) {
      $("#output").append($("<li>" + item + "</li>"));
    });
    $("form").slideUp("slow");
  });
});
