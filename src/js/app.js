import * as html2canvas from "html2canvas";
import { saveAs } from "file-saver";

var toBlob = require("data-uri-to-blob");

function foo() {
  var z = "STRING";
  console.log(z);
}
window.foo = foo;

function inputsave() {
  var x = document.getElementById("input-name");
  document.getElementById("input-show").innerHTML = x.value;
  document.getElementById("input-show-hidden").innerHTML = x.value;
}

window.inputsave = inputsave;

function docapture() {
  html2canvas(document.getElementById("my-hidden-node")).then(function(canvas) {
    const canvasImage = canvas.toDataURL("image/jpeg", 0.9);
    document.getElementById("hiddenimg").setAttribute("value", canvasImage);
    // console.log(canvasImage);
    var blob = toBlob(canvasImage);
    console.log(blob);
    saveAs(blob, "filename");
  });
}

window.docapture = docapture;
//
// var form = document.getElementById("form_download");
// var button = document.getElementById("submit_button");

// form.addEventListener("submit", myfunction);
//
// function myfunction() {
//   alert("The form was submitted");
// }
//
// window.myfunction = myfunction;
//
// button.onclick = function() {
//   window.docapture;
//   button.innerHTML = "Downloading...";
//
//   setTimeout(function() {
//     window.form.submit();
//     button.innerHTML = "Download your certificate";
//   }, 1500);
//   return false;
// };
