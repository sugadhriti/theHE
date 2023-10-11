var SpeechRecognition = window.webkitSpeechrRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;
    console.log(content);

    if(content=="take my selfie")
    {
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    var speech_data = " Wait for 5 seconds";
    
    var saythis = new SpeechSynthesisUtterance(speech_data);

    synth.speak(saythis);

    webcam.attach(camera);

}

camera = document.getElementById("camera");
webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:90
});

