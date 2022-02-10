
$(() => {
  $("#myButton").on("click", () => {
    $.get("http://localhost:8080/api/v1/labor", (data, status) => {
      for (var i = 0; i < data.length; i++) {
        let container = $("<div></div>");
        container.addClass("container");
        container.html(data[i].name + " at " + data[i].address);
        $("#res").append(container);
      }
    })
  })
});