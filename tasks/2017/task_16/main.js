var domHue = document.getElementsByClassName("ColorPicker-hue")[0].children[0];
var domMain = document.getElementsByClassName("ColorPicker-main")[0].children[0];
var domResult = document.getElementsByClassName("ColorPicker-result")[0];
var inputH = document.getElementById("H");
var inputL = document.getElementById("L");
var inputS = document.getElementById("S");
var inputR = document.getElementById("R");
var inputG = document.getElementById("G");
var inputB = document.getElementById("B");


domHue.addEventListener("click", function(event){
    inputH.value = Math.floor(360 / this.offsetHeight * event.offsetY);
    showResult()
})

domMain.addEventListener("click", function(event){
    inputL.value = Math.floor(50 / this.offsetHeight * event.offsetY);
    inputS.value = Math.floor(100 / this.offsetWidth * event.offsetX);
    showResult()
})

drawHue();

function showResult(){
    var hsl = hslText(inputH, inputS, inputL)
    domResult.style.backgroundColor = hsl
}

function drawHue(){
    var canvas = domHue.getContext("2d")
    for(var y=0; y<400; y++){
        canvas.strokeStyle = hslText(y, 100, 50);
        //console.log(canvas.fillStyle)
        canvas.beginPath();
        canvas.moveTo(0, y);
        canvas.lineTo(20, y);
        canvas.stroke();

        //canvas.fillRect(i,j,1,1);
    }
}

function hslText(h, s, l){
    return "hsl("+h.value+","+s.value+"%,"+l.value+"%)"
}

function hslToRGB(h, s, l){

}