function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs);

  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);else elem.append(child);
  }

  return elem;
}

function projectViewData() {
  return createElement("div", {
    className: "component"
  });
}

const projectInput = createElement("form", {
  className: "container",
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
  className: "componentButton",
  id: "laborPost"
}, "Submit"));
const projectView = createElement("div", {
  className: "container",
  id: "res"
});
const businessInput = createElement("div", {
  className: "container"
}, createElement("input", {
  className: "component",
  type: "text",
  name: "server",
  id: "fserver"
}), createElement("br", null), createElement("button", {
  className: "componentButton",
  id: "changeServer"
}, "Connect To Server"), createElement("br", null));
const businessView = createElement("div", {
  className: "container"
}, "BUSINESS VIEW");
const materialsInput = createElement("div", {
  className: "container"
}, "MATERIALS INPUT");
const materialsView = createElement("div", {
  className: "container"
}, "MATERIALS VIEW");
export default {
  projectInput,
  projectView,
  projectViewData,
  businessInput,
  businessView,
  materialsInput,
  materialsView
};