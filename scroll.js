var stage = document.getElementsByClassName('stage');
var slideCount = 0;
var currentSlide = 0;

function slide(obj) {
    var object1 = obj.id;
    if (obj.id === "home") {
        slideCount = 0;
    } else if (obj.id === "schedule") {
        slideCount = 1;
    } else if (obj.id === "programs") {
        slideCount = 2;
    } else if (obj.id === "guests") {
        slideCount = 3;
    } else if (obj.id === "contact") {
        slideCount = 4;
    }

    var object2 = stage[slideCount];
   
  dimPresentSlide();

}

function toggleSlide() {
    var i, stageText;
    for (i = 0; i < stage.length; i++) {
        stageText = "#stage_" + i;
        if (i === slideCount) {
            
            $(stageText).css("opacity",'0'); 
            $(stageText).show();           
            $(stageText).animate({ opacity: 1}, 350, function() { });
            
            
             currentSlide = i;

        } else {
            $(stageText).hide();
        }
    }

   
}

function dimPresentSlide(){
    var stageName = "#stage_" + currentSlide;
    
    $(stageName).animate({
    opacity: 0,
  }, 350, function() {
    toggleSlide();
  });
}



function init() {
    for (var i = 0; i < stage.length; i++) {
        stage[i].style.opacity = 0;
        stage[i].style.display = "none";
    }
    stage[slideCount].style.opacity = 1;
    stage[slideCount].style.display = "block";

    
}
