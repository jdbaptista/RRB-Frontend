
// A jsx pragma method to create html dom elements (more info below)
function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child)
    else elem.append(child)
  }
  return elem
}

function projectViewData() {
  return <div className="component"></div>
}

const projectInput = (
  <form className="container" id="postForm">
    <label className="inputLabel" for="name">Name</label>
    <input className="inputField"  type="text" name="name" id="fname" />
    <label className="inputLabel"  for="address">Address</label>
    <input className="inputField"  type="text" name="address" id="faddress" />
    <label className="inputLabel"  for="date">Date</label>
    <input className="inputField"  type="date" name="date" id="fdate" />
    <label className="inputLabel"  for="task">Task</label>
    <input className="inputField"  type="text" name="task" id="ftask" />
    <label className="inputLabel"  for="time">Time</label>
    <input className="inputField"  type="number" step="0.5" value="8" name="time" id="ftime" />
    <label className="inputLabel"  for="wcCode">Code</label>
    <input className="inputField"  type="number" name="wcCode" id="fcode" />
    <label className="inputLabel"  for="multiplier">Multiplier</label>
    <input className="inputField"  type="number" step="0.1" value="1.0" name="multiplier" id="fmulti" />
    <button className="componentButton"  id="laborPost">Submit</button>
  </form>
)

const projectView = (
  <div className="container" id="view"></div>
)

const businessInput = (
  <div className="container">
      <input className="component" type="text" name="server" id="fserver"/><br/>
      <button className="componentButton" id="changeServer">Connect To Server</button><br/>
  </div>
)

const businessView = (
  <div className="container">
    BUSINESS VIEW
  </div>
)

const materialsInput = (
  <div className="container">MATERIALS INPUT</div>
)

const materialsView = (
  <div className="container">MATERIALS VIEW</div>
)

export default 
{projectInput, projectView, projectViewData,
businessInput, businessView,
materialsInput, materialsView};

