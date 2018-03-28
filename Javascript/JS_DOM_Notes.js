//// DOM ////

// Document Object Model: The *Model* of the HTML *Document* as viewed through the lense of javascript *Objects*
// all tags, elements etc of an HTML page can be viewed as objects with their attribues as keys

var h1 = {
  font-size: "20px",
  color: "yellow",
  class: "firstH1",
  id: "dogHeader"
}
// can be shows as this in HTML:
// <h1 class="firstH1" id="dogHeader" style="color: yellow; font-size: 20px;"></h1>

// to access these values/attributes:
// (all returned as JS objects or "lists" of objects)

document.getElementById('id'); //returns object with id of 'id' i.e.:
document.getElementById('dogHeader')

document.getElementsByClassName('className'); //returns 'nodelist' of object sharing 'className' (it's a nodelist even if only one instance) i.e.:
document.getElementsByClassName("firstH1")[1]; // returns 2nd object from nodelist of all elements with the 'firstH1' class.

document.getElementsByTagName('tagName'); //returns nodelist of objects of that tag name (nodelist even if only one instance) i.e.:
document.getElementsByTagName('h1')[0]; // returns 1st object from nodelist of all elements of the 'h1' tag.

// querySelector and querySelectorAll work the same, but accept CSS-selector-like arguments

document.querySelector('selector'); // returns object that is the first occurence of 'selector' on page, i.e.:
document.querySelector('#dogHeader'); // uses CSS syntax

document.document.querySelectorAll('selector'); // same as above but returns a nodelist of all matches:
document.document.querySelectorAll('.container .row'); // returns node list of all elements with class 'row' inside 'container' classes

// attributes work silimarly:

var anch = document.getElementsByTagName('a'); // node list of anchor ('a') objects
anch[0].getAttribute("href"); // returns the value for 'href' of the first 'a' object
anch[0].setAttribute("href", "http://www.google.com"); // changes the value of 'href' on the first 'a' elemt to be google.com

//// Changing Style ////

var logo = document.getElementById('companyLogo'); // selects object/element with the id of 'companyLogo', sets it to 'logo'
logo.style.cssProperty; // returns the current value of whichever 'cssProperty' is typed, eg, 'color', 'padding-right', 'border', etc
logo.style.cssProperty = "new value"; // sets the value of 'cssProperty' to 'new value'
logo.style.border = "1px solid red"; // sets logo's border propertie to 1 pixel solid red.

// To loop through node lists (changing all hrefs, or img srcs, or h1 borders), must use for loops:
for (var i = 0; i < nodeList.length; i++) { // loops through 'nodeList'
  nodeList[i].style.color = "blue";        // for each object in nodeList, changes style.color to 'blue'
}

//// Event Listening ////
// for running code following an interaction. LISTEN for action at specific places, then RUN code.
element.addEventListener(type, fucntionToCall);

var button = document.querySelector('button'); // setting variables
var paragraph = document.querySelector('p');

button.addEventListener("click", function() {             //adds a listener to 'button', listening for the type 'click'
  paragraph.textContent = "Someone clicked the button!";  // after 'button' gets the 'click', runs this function, changing some text
})
