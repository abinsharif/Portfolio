// Cycle through colors for hero text
const textElement = document.getElementById("changingColorText");
const colors = ["#ff5252", "#ffb400", "#00c853", "#40c4ff", "#e040fb"];
let index = 0;

setInterval(() => {
    textElement.style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1500);
