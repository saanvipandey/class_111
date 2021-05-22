Webcam.set (
    {
        width:310,
        height:300,
        image_format: 'png',
        img_quality:90,

    constraints: {
        facingMode : "environment"
    }

});

camera = document.getElementById("camera");

Webcam.attach("#camera");