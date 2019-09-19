$(document).ready(function() {
  $.getJSON("http://localhost:3000/fishes").then(function(fishes) {
    fishes.forEach(function(fish) {
      let $newFish = $("<li>", {
        text: `${fish.name} : ${fish.type}`
      });
      $container.append($newFish);
    });
  });
  $("#new-fish-form").on("submit", function(e) {
    e.preventDefault();
    const name = $("#name").val();
    const type = $("#type").val();
    $.post("http://localhost:3000/fishes", { name, type }).then(function(fish) {
      let $newFish = $("<li>", {
        text: `${fish.name} ${fish.type}`
      });
      $container.append($newFish);
      $("#new-fish-form").trigger("reset");
    });
  });

  $container.on("click", ".delete", function(e) {
    e.preventDefault();
    const id = $(e.target)
      .parent()
      .data("id");

    const type = $.ajax({
      method: "DELETE",
      url: `http://localhost:3000/fishes/${id}`
    }).then(function() {
      $(e.target)
        .parent()
        .remove();
    });
  });
});
