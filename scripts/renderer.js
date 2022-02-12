function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs);

  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);else elem.append(child);
  }

  return elem;
}

$(() => {
  var server = "localhost:8080";
  $("#myButton").on("click", () => {
    console.log(server);
    $.get(`http://${server}/api/v1/labor`, (data, status) => {
      $("#res").html("");

      for (var i = 0; i < data.length; i++) {
        let container = $("<div></div>");
        container.addClass("container");
        container.html(`${data[i].name} at ${data[i].address} on ${new Date(data[i].date).toDateString()}`);
        $("#res").append(container);
      }
    });
  });
  $("#postForm").on("submit", e => {
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
    };
    $.ajax({
      type: "POST",
      url: `http://${server}/api/v1/labor`,
      data: JSON.stringify(postData),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });
    console.log(postData);
    e.preventDefault();
  });
  $("#changeServer").on("click", () => {
    server = $("#fserver").val();
    console.log(server);
  });
  $("#generateFiles").on("click", () => {
    $.get(`http://${server}/api/v1/labor/reports/generate`, (data, status) => {
      console.log(`Data: ${data}.\nStatus: ${status}.`);
    });
  });
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
  $("#getReport").on("click", () => {
    let report = $("#freport").val();
    fetch(`http://${server}/api/v1/labor/reports/downloadFile/${report}`).then(resp => {
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
        });
      }
    });
  });
  $("#projects").on("click", () => {
    $(".input").html(projectInput);
  });
  $("#business").on("click", () => {
    console.log("Business clicked...");
  });
  $("#materials").on("click", () => {
    console.log("Materials clicked...");
  });
});
const projectInput = createElement("form", {
  className: "projectInput",
  id: "postForm"
}, createElement("label", {
  className: "inputLabel",
  for: "name"
}, "Name"), createElement("input", {
  className: "inputField",
  type: "text",
  name: "name",
  id: "fname"
}), createElement("label", {
  className: "inputLabel",
  for: "address"
}, "Address"), createElement("input", {
  className: "inputField",
  type: "text",
  name: "address",
  id: "faddress"
}), createElement("label", {
  className: "inputLabel",
  for: "date"
}, "Date"), createElement("input", {
  className: "inputField",
  type: "date",
  name: "date",
  id: "fdate"
}), createElement("label", {
  className: "inputLabel",
  for: "task"
}, "Task"), createElement("input", {
  className: "inputField",
  type: "text",
  name: "task",
  id: "ftask"
}), createElement("label", {
  className: "inputLabel",
  for: "time"
}, "Time"), createElement("input", {
  className: "inputField",
  type: "number",
  step: "0.5",
  value: "8",
  name: "time",
  id: "ftime"
}), createElement("label", {
  className: "inputLabel",
  for: "wcCode"
}, "Code"), createElement("input", {
  className: "inputField",
  type: "number",
  name: "wcCode",
  id: "fcode"
}), createElement("label", {
  className: "inputLabel",
  for: "multiplier"
}, "Multiplier"), createElement("input", {
  className: "inputField",
  type: "number",
  step: "0.1",
  value: "1.0",
  name: "multiplier",
  id: "fmulti"
}), createElement("button", {
  className: "inputButton",
  id: "laborPost"
}, "Submit"));