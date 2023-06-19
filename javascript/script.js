const bar = document.querySelector(".fa-bars");
const closeNav = document.querySelector(".fa-x");
const sideNav = document.querySelector(".sidenav");
const sideNavBlack = document.querySelector(".sidenav-black");

bar.addEventListener("click", handleClick);
closeNav.addEventListener("click", handleClose);

function handleClick() {
  sideNav.classList.add("active");
  sideNavBlack.classList.add("active");
}

function handleClose() {
  sideNav.classList.remove("active");
  sideNavBlack.classList.remove("active");
}
