const projects = [
  {
    link:
      "http://sarasorensen.com/2020-09-13-semesterproject2-saras%C3%B8rensen%20-kopi/index.html",
    src: "images/got.png",
    alt: "A website",
    id: "got",
  },
  {
    link: "http://sarasorensen.com/examFebruary/index.html",
    src: "images/space.png",
    alt: "A website",
    id: "space",
  },
  {
    link: "http://sarasorensen.com/CA/index.html",
    src: "images/yay.png",
    alt: "A website",
    id: "yay",
  },
  {
    link: "http://sarasorensen.com/re-cycle/html-css/re-index.html",
    src: "images/recycle.png",
    alt: "A website",
    id: "recycle",
  },
  {
    link: "http://sarasorensen.com/yoga/index.html",
    src: "images/yoga.png",
    alt: "A website",
    id: "yoga",
  },
  {
    link: "http://sarasorensen.com/semesterproject/HTML/home.html",
    src: "images/museum.png",
    alt: "A website",
    id: "museum",
  },
];

var displayProject = document.querySelector(".columnGa");

function render() {
  displayProject.innerHTML = "";

  projects.forEach(function (object) {
    displayProject.innerHTML += `
                                    <div class="flex-box">
                                    <img class="img-project" src=${object.src} alt=${object.alt} id=${object.id}>
                                    <button type="button" class="projectBtn" onclick="NewTab(('${object.link}'))"> View Page </button>
                                    </div>`;
  });
}

render();
