console.log(' script work');

const widthHeight = document.getElementById("lottieDiv");
var animationData = "animations/example.json";
var params = { container: widthHeight, path: 'animations/example.json', renderer: 'svg', loop: true, autoplay: true, name: "Demo Animation", };
var anim;

anim = lottie.loadAnimation(params);

onmousemove = function (e) {
    console.log("mouse location:", 100/widthHeight.offsetWidth*e.clientX, "%", e.clientY);
    lottie.goToAndStop(181 * (1 / widthHeight.offsetWidth * e.clientX), true, "Demo Animation");
}