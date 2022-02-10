
$(() => {

  var server = "localhost:8080";

  // container get requests
  $("#myButton").on("click", () => {
    console.log(server);
    $.get(`http://${server}/api/v1/labor`, (data, status) => {
      $("#res").html("");
      for (var i = 0; i < data.length; i++) {
        let container = $("<div></div>");
        container.addClass("container");
        container.html(`${data[i].name} at ${data[i].address} on ${new Date(data[i].date).toDateString()}`)
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
    var multiplier = parseFloat($("#fmulti").val());

    var postData = {
      "name": name,
      "address": address,
      "date": date,
      "task": task,
      "time": time,
      "wcCode": code,
      "multiplier": multiplier
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
  });

  // connect to new server
  $("#changeServer").on("click", () => {
    server = $("#fserver").val();
    console.log(server);
  })

  // generate files
  $("#generateFiles").on("click", () => {
    $.get(`http://${server}/api/v1/labor/reports/generate`, (data, status) => {
      console.log(`Data: ${data}.\nStatus: ${status}.`);
    });
  });

  // get file names
  $("#fileNames").on("click", () => {
    console.log("clicked");
    $.get(`http://${server}/api/v1/labor/reports/all`, (data, status) => {
      console.log(`Data: ${data}.\nStatus: ${status}.`);
      $("#res").html("");
      for (var i = 0; i < data.length; i++) {
        let container = $("<div></div>");
        container.addClass("container");
        container.html(`${data[i]}`);
        $("#res").append(container);
      }
    });
  });

  // get report
  $("#getReport").on("click", () => {
    let report = $("#freport").val();
    fetch(`http://${server}/api/v1/labor/reports/downloadFile/${report}`)
      .then(resp => {
        if (resp.status != 200) {
          alert("something went wrong downloading the file");
        } else {
          var p = resp.blob();
          p.then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `${report}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
        }
      });
      
  })

});