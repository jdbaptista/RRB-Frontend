
$(() => {

  // container get requests
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

  // container post request
  $("#postForm").on("submit", (e) => {
    var name = $("#fname").val();
    var address = $("#faddress").val();
    var date = $("#fdate").val();
    var task = $("#ftask").val();
    var time = parseFloat($("#ftime").val());
    var code = parseInt($("#fcode").val());

    var postData = {
      "name": name,
      "address": address,
      "date": date,
      "task": task,
      "time": time,
      "wcCode": code
    }

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/v1/labor",
      data: JSON.stringify(postData),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });

    console.log(postData);

    e.preventDefault();
  })
});