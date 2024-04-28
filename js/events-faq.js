/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/* FAQs */

let cnt = [1, 1, 1, 1, 1, 1, 1, 1];
function reveal(num) {
  if (cnt[num - 1] == 1) {
    document.getElementById("answer" + num).style.display = "block";
    document.getElementById("img" + num).src = "../img/show_less.png";
    return (cnt[num - 1] = 0);
  } else {
    document.getElementById("answer" + num).style.display = "none";
    document.getElementById("img" + num).src = "../img/show_more.png";
    return (cnt[num - 1] = 1);
  }
}
if (localStorage.getItem("isDark") === null) {
  localStorage.setItem("isDark", "false");
}
for (var num = 1; num < 14; num++) {
  if (localStorage.getItem("isFavourites" + num) == null) {
    localStorage.setItem("isFavourites" + num, "false");
  }
}

function onload(pageName) {
  if (localStorage.getItem("isDark") == "true") {
    localStorage.setItem("isDark", "false");
    document.getElementById("dark-lightCheckbox").checked = true;
    if (pageName == 'FAQs') {
      dark("FAQs");
    }
    if (pageName == 'Events') {
      dark("Events");
    }
  }
  for (var num = 1; num < 14; num++) {
    if (localStorage.getItem("isFavourites" + num) == "true") {
      document
        .getElementById("content-container" + num)
        .classList.add("popup-class");
      document.getElementById("likeBtn" + num).checked = true;
    }
  }
}
function dark(page) {
  if (localStorage.getItem("isDark") == "false") {
    document.documentElement.style.setProperty(
      "--header-background-color",
      "#18191a"
    );
    document.documentElement.style.setProperty(
      "--header-font-color",
      "whitesmoke"
    );
    document.documentElement.style.setProperty(
      "--body-background-color",
      "#18191a"
    );
    document.documentElement.style.setProperty(
      "--body-font-color",
      "whitesmoke"
    );
    document.documentElement.style.setProperty(
      "--feedbackformChat-font-color",
      "grey"
    );
    document.documentElement.style.setProperty(
      "--feedbackformChat-background-color",
      "#242526"
    );
    document.documentElement.style.setProperty("--subMenu-background-color","#242526");
    document.documentElement.style.setProperty("--search-background-color","#242526");
    document.documentElement.style.setProperty("--search-font-color","whitesmoke");


    document.getElementById("subMenuIcon2-1").style.filter = "invert(.85)";
    document.getElementById("subMenuIcon2-2").style.filter = "invert(.85)";
    document.getElementById("subMenuIcon2-3").style.filter = "invert(.85)";

    document.getElementById("SMI1").style.filter = "invert(1)";
    document.getElementById("SMI2").style.filter = "invert(1)";
    document.getElementById("SMI3").style.filter = "invert(1)";

    if (page == "FAQs") {
      for (let i = 1; i < 9; i++) {
        document.getElementById("img" + i).style.filter = "invert(1)";
      }
    } else if (page == "Events") {
      document.documentElement.style.setProperty(
        "--mainSectionEvents-content-background-color",
        "#18191a"
      );
      document.documentElement.style.setProperty(
        "--mainSectionEvents-navBar-background-color",
        "#18191a"
      );
      document.documentElement.style.setProperty(
        "--mainSectionEvents-navBar-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--calendar_campus-dropDown-background-color",
        "#242526"
      );
      document.documentElement.style.setProperty(
        "--calendar_campus-dropDown-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--calendar_campus-dropDowns-hover-background-color",
        "#18191a"
      );
      document.documentElement.style.setProperty(
        "--content-container-background-color",
        "#242526"
      );
      document.documentElement.style.setProperty(
        "--container-info-font-color",
        "whitesmoke"
      );
      document.getElementById("navLeft-btn").style.filter = "invert(1)";
      document.getElementById("navRight-btn").style.filter = "invert(1)";
      const containerIcons = document.getElementsByClassName("container-icons");
      for (let i = 0; i < containerIcons.length; i++) {
        containerIcons[i].style.filter = "invert(1)";
      }
      const readMore = document.getElementsByClassName("read-more");
      for (let i = 0; i < readMore.length; i++) {
        readMore[i].style.filter = "invert(1)";
      }
    }
  } else if (localStorage.getItem("isDark") == "true") {
    document.documentElement.style.removeProperty("--header-background-color");
    document.documentElement.style.removeProperty("--header-font-color");
    document.documentElement.style.removeProperty("--body-background-color");
    document.documentElement.style.removeProperty("--body-font-color");
    document.documentElement.style.removeProperty("--feedbackformChat-font-color");
    document.documentElement.style.removeProperty("--feedbackformChat-background-color");
    document.documentElement.style.removeProperty("--subMenu-background-color");
    document.documentElement.style.removeProperty("--search-background-color");
    document.documentElement.style.removeProperty("--search-font-color");

    document.getElementById("subMenuIcon2-1").style.filter = "invert(0)";
    document.getElementById("subMenuIcon2-2").style.filter = "invert(0)";
    document.getElementById("subMenuIcon2-3").style.filter = "invert(0)";

    document.getElementById("SMI1").style.filter = "invert(0)";
    document.getElementById("SMI2").style.filter = "invert(0)";
    document.getElementById("SMI3").style.filter = "invert(0)";

    if (page == "FAQs") {
      for (let i = 1; i < 9; i++) {
        document.getElementById("img" + i).style.filter = "invert(0)";
      }
    } else if (page == "Events") {
      document.documentElement.style.removeProperty(
        "--mainSectionEvents-content-background-color"
      );
      document.documentElement.style.removeProperty(
        "--mainSectionEvents-navBar-background-color"
      );
      document.documentElement.style.removeProperty(
        "--mainSectionEvents-navBar-font-color"
      );
      document.documentElement.style.removeProperty(
        "--calendar_campus-dropDown-background-color"
      );
      document.documentElement.style.removeProperty(
        "--calendar_campus-dropDown-font-color"
      );
      document.documentElement.style.removeProperty(
        "--calendar_campus-dropDowns-hover-background-color"
      );
      document.documentElement.style.removeProperty(
        "--content-container-background-color"
      );
      document.documentElement.style.removeProperty(
        "--container-info-font-color"
      );
      document.getElementById("navLeft-btn").style.filter = "invert(0)";
      document.getElementById("navRight-btn").style.filter = "invert(0)";
      const containerIcons = document.getElementsByClassName("container-icons");
      for (let i = 0; i < containerIcons.length; i++) {
        containerIcons[i].style.filter = "invert(0)";
      }
      const readMore = document.getElementsByClassName("read-more");
      for (let i = 0; i < readMore.length; i++) {
        readMore[i].style.filter = "invert(0)";
      }
    }
  }
  localStorage.getItem("isDark") == "true"
    ? localStorage.setItem("isDark", "false")
    : localStorage.setItem("isDark", "true");
}

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Events */
var monthIndex = 3;

let elements1 = document.getElementsByClassName("NAC");
let elements2 = document.getElementsByClassName("DT");
let elements3 = document.getElementsByClassName("NC");

function show_All_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "flex";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "flex";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "flex";
  }

  document.getElementById("dropDown-all").style.color = "#ff4500";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "";

  document.getElementById("campusViewer-btn").textContent = "Campus";
}

function show_NC_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "none";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "none";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "flex";
  }

  document.getElementById("dropDown-all").style.color = "";
  document.getElementById("dropDown-NC").style.color = "#ff4500";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "";

  document.getElementById("campusViewer-btn").textContent = "New Cairo";
}

function show_DT_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "none";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "flex";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "none";
  }

  document.getElementById("dropDown-all").style.color = "";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "#ff4500";
  document.getElementById("dropDown-NAC").style.color = "";

  document.getElementById("campusViewer-btn").textContent = "Down Town";
}

function show_NAC_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "flex";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "none";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "none";
  }

  document.getElementById("dropDown-all").style.color = "";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "#ff4500";

  document.getElementById("campusViewer-btn").textContent = "N.A.C";
}

function nav(direction) {
  document.getElementById("dropDown-all").style.color = "#ff4500";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "";
  document.getElementById("campusViewer-btn").textContent = "Campus";

  if (direction == "left") monthIndex--;
  else if (direction == "right") monthIndex++;

  if (monthIndex < 0) monthIndex = 12;
  else if (monthIndex > 12) monthIndex = 0;

  const monthNames = [
    "All",
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];
  document.getElementById("monthName").textContent = monthNames[monthIndex];

  function showElements(elements) {
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.display = "flex";
    }
  }
  function hideElements(elements) {
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.display = "none";
    }
  }

  if (monthIndex == 0) {
    monthNames.forEach((month, index) => {
      showElements(document.getElementsByClassName(month));
    });
  } else {
    monthNames.forEach((month, index) => {
      if (index === monthIndex) {
        showElements(document.getElementsByClassName(month));
      } else {
        hideElements(document.getElementsByClassName(month));
      }
    });
  }
}

function favourite(num) {
  var checkbox = document.getElementById("likeBtn" + num);
  var popupMessageTick = document.getElementById("popup-massage-tick");
  var popupMessageCross = document.getElementById("popup-massage-cross");

  if (checkbox.checked) {
    popupMessageTick.style.display = "flex";
    setTimeout(function () {
      popupMessageTick.style.display = "none";
    }, 3000);
    document
      .getElementById("content-container" + num)
      .classList.add("popup-class");
    localStorage.setItem("isFavourites" + num, "true");
  } else {
    popupMessageCross.style.display = "flex";
    setTimeout(function () {
      popupMessageCross.style.display = "none";
    }, 3000);
    document
      .getElementById("content-container" + num)
      .classList.remove("popup-class");
    if (localStorage.getItem("isFavourites" + num) == "true") {
      localStorage.setItem("isFavourites" + num, "false");
    }
  }
}

var filterFavouritesCnt = 0;
function filterFavourites() {
  var divs = document.querySelectorAll(".content-container");
  if (filterFavouritesCnt == 0) {
    document.getElementById("monthName").textContent = "All";
    monthIndex = 3;
    document.getElementById("dropDown-all").style.color = "#ff4500";
    document.getElementById("dropDown-NC").style.color = "";
    document.getElementById("dropDown-DT").style.color = "";
    document.getElementById("dropDown-NAC").style.color = "";
    document.getElementById("campusViewer-btn").textContent = "Campus";

    divs.forEach(function (div) {
      if (!div.classList.contains("popup-class")) {
        div.style.display = "none";
      }
    });
    filterFavouritesCnt = 1;
  } else {
    document.getElementById("monthName").textContent = "All";
    monthIndex = 3;
    document.getElementById("dropDown-all").style.color = "#ff4500";
    document.getElementById("dropDown-NC").style.color = "";
    document.getElementById("dropDown-DT").style.color = "";
    document.getElementById("dropDown-NAC").style.color = "";
    document.getElementById("campusViewer-btn").textContent = "Campus";

    divs.forEach(function (div) {
      div.style.display = "flex";
    });
    filterFavouritesCnt = 0;
  }
}

var feedback_cnt = 0;
function feedback() {
  if (feedback_cnt == 0) {
    document.getElementById("feedbackForm-container").style.display = "flex";
    document.getElementById("feedbackIcon").src = "../img/X.png";
    feedback_cnt = 1;
  } else if (feedback_cnt == 1) {
    document.getElementById("feedbackForm-container").style.display = "none";
    document.getElementById("feedbackIcon").src = "../img/Chat.png";
    feedback_cnt = 0;
  }
}

function searchAndHighlight() {
  var oldHighlights = document.querySelectorAll(".highlight");
  oldHighlights.forEach(function (node) {
    node.outerHTML = node.innerHTML; 
  });

  var searchText = document.getElementById("searchText").value;
  if (searchText) {
    var regExp = new RegExp(
      "\\b" + searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b",
      "gi"
    );
    var firstMatch = null;

    function searchNodes(node) {
      if (node.nodeType === 3) {
        var match = node.nodeValue.match(regExp);
        if (match) {
          var span = document.createElement("span");
          span.className = "highlight";
          span.innerHTML = node.nodeValue.replace(
            regExp,
            '<span class="highlight">$&</span>'
          );
          node.parentNode.replaceChild(span, node);
          if (!firstMatch) {
            firstMatch = span.querySelector(".highlight");
          }
        }
      } else if (
        node.nodeType === 1 &&
        node.nodeName !== "SCRIPT" &&
        node.nodeName !== "STYLE"
      ) {
        Array.from(node.childNodes).forEach(searchNodes);
      }
    }

    searchNodes(document.body);
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("No matches found.");
    }
  }
}

function handleKeyPress(event) {
  var key = event.key || event.keyCode;
  if (key === "Enter" || key === 13) {
    searchAndHighlight();
  }
}
