var tabButtons = document.querySelectorAll(".container .tabs button");
var tabPanels = document.querySelectorAll(".container .tabcontent");

function openSkill(panelIndex, skill) {
    for (i = 0; i < tabPanels.length; i++) {
        tabPanels[i].style.display = "none";
    }

    // Display current tab
    document.getElementById(skill).style.display="block";

    for (i = 0; i < tabButtons.length; i++) {
        if (tabButtons[i].style.backgroundColor!="#35435A") {
            tabButtons[i].style.backgroundColor="blue";
        }
    }

    // Change active tab button's background color
    tabButtons[panelIndex].style.backgroundColor="whitesmoke";
    tabButtons[panelIndex].style.transition="0.2s";

    for (i = 0; i < tabButtons.length; i++) {
        if (tabButtons[i].style.color!="whitesmoke") {
            tabButtons[i].style.color="whitesmoke";
        }
    }

    // Change active tab button's text color to black
    tabButtons[panelIndex].style.color="black";

}

// Function to open about me page
function openNav() {
    document.getElementById("mySidenav").style.width = "750px";
}
  
// Function to close about me page
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

openSkill(0, "Teaching");
