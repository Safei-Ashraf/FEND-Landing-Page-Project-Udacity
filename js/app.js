//Generate Nav Items:

//STORE The Navigation menu:
let navMenu = document.getElementById("navbar__list");
//SELECT All Section elements:
let sections = document.querySelectorAll("section");
let navItem;
//GENERATE Navigation Item for Each Section:
sections.forEach((section) => {
  navItem = document.createElement("li");
  //Adjust each list item to display section name and scroll to it on click:
  navItem.innerHTML = `<li><a href='#${section.id}'>${section.dataset.nav}</a></li>`;
  //Finally append generated list items to the main Ul container in the document:
  navMenu.appendChild(navItem);
});

//Highlight Section in View:

/*Helper Methods*/

/*http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
 */
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//Check on Sections if They are in viewport:
function checkSectionsView() {
  sections.forEach((section) => {
    //if section is in viewPort add Active Class:
    if (isElementInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      //if Section goes out viewPort, remove the active clasS:
      section.classList.remove("your-active-class");
    }
  });
}
//Call the checker function on scrolling:
window.addEventListener("scroll", checkSectionsView);
