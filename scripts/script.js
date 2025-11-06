// winkelwagen-knop
var openButton = document.querySelector("header > section:nth-of-type(2) > ul:nth-of-type(2) li:last-child button");

openButton.onclick = openMenu;

function openMenu(){
  var winkelmand = document.querySelector("header > section:nth-of-type(2) > section");
  winkelmand.classList.add("toonMenu");
}

/* sluiten */
var sluitButton = document.querySelector("header > section:nth-of-type(2) > section button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("header > section:nth-of-type(2) > section");
  deNav.classList.remove("toonMenu");
}

/* summary opengeklapt */
/* source: chatgpt. Ik kan het niet uitleggen */
function handleDetails() {
  const detailsList = document.querySelectorAll("details");
  const isDesktop = window.innerWidth >= 1024;

  detailsList.forEach(details => {
    const summary = details.querySelector("summary");

    if (isDesktop) {
      // Open en deactiveer toggle
      details.setAttribute("open", "");
      summary.style.pointerEvents = "none";
    } else {
      // Herstel normaal gedrag
      details.removeAttribute("open");
      summary.style.pointerEvents = "auto";
    }
  });
}

// Bij het laden van de pagina
window.addEventListener("load", handleDetails);

// Bij het resizen van het scherm
window.addEventListener("resize", handleDetails);