function setupHistoryClicks() {

addClicker(document.getElementById("home"));
  addClicker(document.getElementById("schedule"));
    addClicker(document.getElementById("programs"));
  addClicker(document.getElementById("guests"));
     addClicker(document.getElementById("contact"));
    
  
}



function dimPresentSlide(){
    
    
    
    
    $("#replaceable").animate({
    opacity: 0,
  },500, function() {
    
  });
}


function addClicker(link) {
     
    
  link.addEventListener("click", function(e) {
      
      swapPhoto(link.href);
    history.pushState(null, null, link.href);
    e.preventDefault();
  }, false);
}

function swapPhoto(href) {
  var req = new XMLHttpRequest();
    
  req.open("GET", "http://127.0.0.1:52053/" + href.split("/").pop(),
           false);
    
  req.send(null);
    

    
    if (req.status == 200) {
        
//        $("#pauseButton").hide();
//     $("#playButton").show(); 
        
        
   
        $("#input").prop('checked', false);
        
        
        
    $("#replaceable").html(req.responseText.substring(req.responseText.indexOf('replaceable')+13, req.responseText.indexOf("<stopHistory")));
     
      
//        console.log(req.responseText.substring(req.responseText.indexOf('replaceable')+13, req.responseText.indexOf('<div data-brackets-id='170'')));
//         console.log(req.responseText.indexOf('replaceable')+13 + " " + req.responseText.indexOf('<div class="playpause"'));
   
       
        
    setupHistoryClicks();
        
    return true;
  }
  return false;
}

window.addEventListener("popstate", function(e) {
    swapPhoto(location.pathname);
});



setupHistoryClicks();