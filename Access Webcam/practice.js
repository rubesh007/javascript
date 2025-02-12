// console.log("hi rubeshkumar")
//Acessing Webcam using JavaScript
const videoElement = document.getElementById("webcam");
navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(ok => {

   videoElement.srcObject = ok
}) 



