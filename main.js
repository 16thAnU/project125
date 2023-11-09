function preload(){
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialised');
}
function draw(){
 image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save('The amazing moustache_filter.png!!!');
}
