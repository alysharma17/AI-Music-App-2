soundtrack_1="";
soundtrack_2="";
function preload() {
    soundtrack_1=loadSound("music.mp3");
    soundtrack_2=loadSound("music2.mp3")
}
function setup() {
    video=createCapture(VIDEO);
    video.hide();
    canvas=createCanvas(800,600);
    canvas.center();
}
function draw() {
    image(video, 0,0,800,600);
}
