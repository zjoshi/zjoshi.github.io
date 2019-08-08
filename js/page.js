var menubar = $('#menu-bar');
var wrapper = $('#wrapper');
var about = $('#about');
var projects = $('#projects');
var blog = $('#blog');
var photos = $('#photos');
var contact = $('#contact');
var skills = $('#skills');
var break_ = $('#break');

var slideIndex = 1;
var eecs281Button = $('#eecs281');
var eecsOtherButton = $('#eecsOther');
var kpitButton = $("#kpit");
var eecs281Div = $("#eecs281Div");
var eecsOtherDiv = $("#eecsOtherDiv");
var kpitDiv = $("#kpitDiv");


$(document).ready(function(){
  console.log("Hey, you! Taking a quick peek under the hood?");
    console.log("Contact me with questions at zjoshi@umich.edu");

  // Add smooth scrolling to all links
  $(".js-scroll-trigger").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



  $("#nanogallery2").nanogallery2( {
    // ### gallery settings ### 
            "kind":               "flickr",
            "userID":             "151915827@N03",
            "photoset":           "none",
            "thumbnailHeight":    175,
            "thumbnailWidth":     "auto",
            "thumbnailBorderVertical": 0,
            "thumbnailBorderHorizontal": 0,
            "galleryLastRowFull":  true,
            "thumbnailLabel": {
              "display": false
            },
            "thumbnailHoverEffect2": "imageScale150Outside",
            "thumbnailAlignment": "center",
            "thumbnailGutterWidth": 4,
            "thumbnailGutterHeight": 4,
            "viewerToolbar":   {
              "standard":   "minimizeButton, label, shareButton, fullscreenButton",
              "minimized":  "minimizeButton, label, fullscreenButton, downloadButton, infoButton" 
            },

  });
});



$(document).ready(function() {
  colorSkills();
  setInterval(function() {
    var isCol = 
    collision(menubar, about) 
    || collision(menubar, projects) 
    || collision(menubar, blog) 
    || collision(menubar, photos) 
    || collision(menubar, contact) 
    || collision(menubar, skills);
    if (isCol) {
      changeMenu();
    }
    else {
      defaultMenu();
    }
  }, 250)

});


function colorSkills() {
  var color = 4251856;
  $('.skills-list-item').each(function() {
    var hexString = color.toString(16);
    $(this).css('background-color','#'+hexString);
    color=color-2816;
  });
};


function changeMenu() {
  menubar.css('background-image', '-webkit-linear-gradient(60deg, #f5f5f5 15%, #f5f5f5 85%)');
  menubar.css('transition','background-image 500ms linear');
  menubar.css('background-color','white');
  menubar.css('transition','background-color 500ms linear');
  menubar.css('height','50px');
  menubar.css('transition','height 200ms linear');
  menubar.css('border-radius','0px');
  $(".menu-item").css('color', 'black');
  $(".menu-item").css('transition','color 200ms linear');

};

function defaultMenu() {
  menubar.css('background-image', '-webkit-linear-gradient(60deg, #337584 15%, #174261 85%)');
  menubar.css('transition','background-image 500ms linear');
  menubar.css('background-color','');
  menubar.css('transition','background-color 500ms linear');
  menubar.css('height','70px');
  menubar.css('transition','height 200ms linear');
  menubar.css('border-radius','8px');
  $(".menu-item").css('color', 'white');
  $(".menu-item").css('transition','color 200ms linear');
};



 function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}




eecs281Button.click(function(){
  console.log('281');

  if (eecsOtherDiv.is(':visible')) {
    eecsOtherDiv.hide();
    eecsOtherButton.css('background-color', '#89d6d3');
    eecsOtherButton.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  if (kpitDiv.is(':visible')) {
    kpitDiv.hide();
    kpitButton.css('background-color', '#89d6d3');
    kpitButton.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  if (eecs281Div.is(':visible')) {
    eecs281Div.hide();
    eecs281Button.css('background-color', '#89d6d3');
    eecs281Button.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  else {
    $(this).css('background-color', 'rgb(64, 81, 208)');
    $(this).css('box-shadow', '0 0 0 1px rgb(64, 81, 208');
    eecs281Div.fadeToggle(800);
    eecs281Div.show();

  }

});


eecsOtherButton.click(function(){
  console.log('other');


  if (eecs281Div.is(':visible')) {
    eecs281Div.hide();
    eecs281Button.css('background-color', '#89d6d3');
    eecs281Button.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  if (kpitDiv.is(':visible')) {
    kpitDiv.hide();
    kpitButton.css('background-color', '#89d6d3');
    kpitButton.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  if (eecsOtherDiv.is(':visible')) {
    eecsOtherDiv.hide();
    $(this).css('background-color', '#89d6d3');
    $(this).css('box-shadow', '0 0 0 1px #89d6d3');

  }
  else {
    $(this).css('background-color', 'rgb(64, 81, 208)');
    $(this).css('box-shadow', '0 0 0 1px rgb(64, 81, 208');
    eecsOtherDiv.fadeToggle(800);
    eecsOtherDiv.show();
  }

});

kpitButton.click(function(){
  console.log('kpit');
  if (eecs281Div.is(':visible')) {
    eecs281Div.hide();
    eecs281Button.css('background-color', '#89d6d3');
    eecs281Button.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  if (eecsOtherDiv.is(':visible')) {
    eecsOtherDiv.hide();
    eecsOtherButton.css('background-color', '#89d6d3');
    eecsOtherButton.css('box-shadow', '0 0 0 1px #89d6d3');
  }
  if (kpitDiv.is(':visible')) {
    kpitDiv.hide();
    $(this).css('background-color', '#89d6d3');
    $(this).css('box-shadow', '0 0 0 1px #89d6d3');

  }
  else {
    $(this).css('background-color', 'rgb(64, 81, 208)');
    $(this).css('box-shadow', '0 0 0 1px rgb(64, 81, 208');
    kpitDiv.fadeToggle(800);
    kpitDiv.show();
  }

});
