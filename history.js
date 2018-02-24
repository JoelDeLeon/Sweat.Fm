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
    
  req.open("GET", "http://127.0.0.1:60029/" + href.split("/").pop(),
           false);
    
  req.send(null);
    

    
    if (req.status == 200) {
        
         
   
        $("#input").prop('checked', false);
        
    $("#replaceable").html(req.responseText.substring(req.responseText.indexOf('replaceable')+13, req.responseText.indexOf('<script')));
     
        console.log();
   
       
        
    setupHistoryClicks();
    return true;
  }
  return false;
}

window.addEventListener("popstate", function(e) {
    swapPhoto(location.pathname);
});



setupHistoryClicks();