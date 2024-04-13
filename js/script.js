console.log(' script work');

const widthHeight = document.getElementById("lottieDiv");
var animationData = "animations/example.json";
var params = { container: widthHeight, path: animationData, renderer: 'svg', loop: true, autoplay: true, name: "Demo Animation", };
var anim;

anim = lottie.loadAnimation(params);

onmousemove = function (e) {
    var mouseW = 1 / widthHeight.offsetWidth * e.clientX;
    
    if(mouseW > 1){
        mouseW = 1;
    }
    //console.log("mouse location:", 100*mouseW, "%");
    //console.log("totalFrames", anim.totalFrames);
    lottie.goToAndStop((anim.totalFrames-1) * mouseW, true, "Demo Animation");
}
anim.onEnterFrame = function(e){
    console.log("currentTime: ", e.currentTime);
}