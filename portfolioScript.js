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
            tabButtons[i].style.backgroundColor="#35435A";
        }
    }

    // Change active tab button's background color
    tabButtons[panelIndex].style.backgroundColor="whitesmoke";
    tabButtons[panelIndex].style.transition="0.2s";
}

openSkill(0, "Teaching");
