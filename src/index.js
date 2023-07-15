function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let goDark = document.querySelector(".off");
goDark.addEventListener("click", changeTheme);

function askInfo() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  if (email) {
    alert(
      "Hi," +
        " " +
        name +
        "!" +
        " " +
        "more pictures are on their way to your email!📸"
    );
  } else {
    alert(
      "☹️sorry," +
        " " +
        name +
        "!" +
        " " +
        "your email is needed to view more pictures!"
    );
  }
}

let viewMore = document.querySelector(".view-more");
viewMore.addEventListener("click", askInfo);
