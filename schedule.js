var lastParentID;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

  lastParentID = ev.target.parentElement.id;
}

function drop(ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggable = document.getElementById(data);
  el.appendChild(draggable);

  if (ev.target.id == "div1" || ev.target.parentElement.id == "div1" || lastParentID == "div1") {
    loadActivities();
  }
}


// --------------------


var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var activities = [
  "Class Record Form",
  "Manifesto",
  "Draft work",
  "Process Record Form",
  "Summary of Process Record Form",
  "Eight Key Factors",
  "Critique"
];

var dragCount = 0;
var divCount = 1;

loadSchedule();

function loadSchedule() {
  loadActivities();

  for (var j = 0; j < days.length; j++) {
    var newDiv = document.createElement("DIV");
    newDiv.className = "small_flexcolumn";
    document.getElementById("col").appendChild(newDiv);

    divCount++;
    newDiv.id = "div" + divCount;
    newDiv.setAttribute("ondrop", "drop(event, this)");
    newDiv.setAttribute("ondragover", "allowDrop(event)");

    var newTitle = document.createElement("H2");
    newTitle.innerHTML = days[j];
    newDiv.appendChild(newTitle);
  }
}

function loadActivities() {
  removeChildren(document.getElementById("div1"));

  for (var i = 0; i < activities.length; i++) {
    newDraggable(activities[i]);
  }
}

function newDraggable(text) {
  var newSchedule = document.createElement("DIV");
  newSchedule.className = "schedule";
  newSchedule.innerHTML = text;
  document.getElementById("div1").appendChild(newSchedule);

  dragCount++;
  newSchedule.id = "drag" + dragCount;
  newSchedule.draggable = "true";
  newSchedule.setAttribute("ondragstart", "drag(event)");
}

function downloadSchedule() {
  var node = document.getElementById("col");

  domtoimage.toPng(node)
    .then (function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;

      var newA = document.createElement("A");
      newA.setAttribute("href", dataUrl);
      newA.setAttribute("download", "schedule");
      newA.click();
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
}

function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}
