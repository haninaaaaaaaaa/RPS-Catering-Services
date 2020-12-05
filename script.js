// SCROLL UP BUTTON
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
    
    
    function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var q, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (q = 0; q < tabcontent.length; q++) {
    tabcontent[q].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (q = 0; q < tablinks.length; q++) {
    tablinks[q].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// SCERIPT FOR FILTER
filterSelection("row")
function filterSelection(c) {
  var z, i;
  z = document.getElementsByClassName("row");
  if (c == "all") c = "";
  for (i = 0; i < z.length; i++) {
    w3RemoveClass(z[i], "show");
    if (z[i].className.indexOf(c) > -1) w3AddClass(z[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  } 
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

/****  IMAGE GRID  */

// Get the elements with class="column"
var elements = document.getElementsByClassName("row");

// Declare a loop variable
var g;

function one() {
  for (g = 0; g < elements.length; g++) {
  elements[g].style.msFlex = "100%";  // IE10
  elements[g].style.flex = "100%";
}
}

// Two images side by side
function two() {
  for (g = 0; g < elements.length; g++) {
    elements[g].style.msFlex = "50%";  // IE10
    elements[g].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (g = 0; g < elements.length; g++) {
    elements[g].style.msFlex = "25%";  // IE10
    elements[g].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var g = 0; g < btns.length; g++) {
  btns[g].addEventListener("click", function() {  
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/********** SLIDESHOW GALLERY *******/
var slideIndex = 0;
showSlides();
function showSlides() {
  var x;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

(function blink() {
  $('.blink_me').fadeOut(500).fadeIn(500, blink);
})();