var canvas = document.getElementById("mycanvas");
var gl = canvas.getContext("webgl");

(!gl) ? console.log('WebGL not supported') : console.log('Success! WebGL is supported');