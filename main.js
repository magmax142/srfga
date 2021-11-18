Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");

function takePic() {
    Webcam.snap(
        function (cam_pic) {
            document.getElementById("result").innerHTML = '<img id="my_pic" src="' + cam_pic + '">';
        }
    );
}

console.log("ml5 version is",ml5.version);

model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tCCf7XBoB/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model loaded successfully");
}

function identifyPic(){
    img=document.getElementById("my_pic");
    model.classify(img,getResult);
}

function getResult(error,result_array){
    if(error){
        console.error(error);
    }
    else{
        console.log(result_array);
        document.getElementById("result_object").innerHTML=result_array[0].label;
        document.getElementById("result_accuracy").innerHTML=result_array[0].confidence;
    }
}
