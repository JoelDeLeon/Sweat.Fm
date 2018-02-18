var stage = document.getElementsByClassName('stage');
var slideCount = 0;

function slide(obj) {
    var object1 = stage[slideCount];
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
}
    var object2 = stage[slideCount];
    transition(object1, object2);


}

function toggleSlide() {
    var i, stageText;
    for (i = 0; i < stage.length; i++) {
        stageText = "stage_" + i;
        if (i === slideCount) {
                document.getElementById(stageText).style.display = "block";

        } else {
            document.getElementById(stageText).style.display = "none";
        }
    }

    
}

function transition(object1, object2) {
    //transition part 1
    object2.style.opacity = 1;
    object2.style.display = "block";
    
    
    toggleSlide();
    
    

    
}

function init() {
    for (var i = 0; i < stage.length; i++) {
        stage[i].style.opacity = 0;
        stage[i].style.display = "none";
    }
    stage[slideCount].style.opacity = 1;
    stage[slideCount].style.display = "block";

    
}
