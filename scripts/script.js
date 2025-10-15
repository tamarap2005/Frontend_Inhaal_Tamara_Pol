let menuOpenButton = document.querySelector("header nav button");

menuOpenButton.addEventListener("click", openMenu);

function openMenu(){
  let deNav = document.querySelector("header nav");
  deNav.classList.add("is-open")
}

let menuSluiten = document.querySelector("header nav button")

menuSluiten.addEventListener("click", sluitMenu)

function sluitMenu(){
  let deNav = document.querySelector("header nav");
  deNav.classList.remove("is-open")
}