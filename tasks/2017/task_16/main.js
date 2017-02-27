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
    drawMain();
})

domMain.addEventListener("click", function(event){
    inputL.value = Math.floor(100 / this.offsetHeight * event.offsetY);
    inputS.value = Math.floor(100 / this.offsetWidth * event.offsetX);
    showResult()
})

drawHue();
drawMain();

function showResult(){
    var hsl = hslText(inputH.value, inputS.value, inputL.value)
    var rgb = hslToRgb(inputH.value, inputS.value, inputL.value)
    inputR.value = rgb[0]
    inputG.value = rgb[1]
    inputB.value = rgb[2]

    domResult.style.backgroundColor = hsl
}

function drawHue(){
    var canvas = domHue.getContext("2d")
    for(var y=0; y<400; y++){
        canvas.strokeStyle = hslToHex(y, 100, 50);
        canvas.beginPath();
        canvas.moveTo(0, y);
        canvas.lineTo(20, y);
        canvas.stroke();
    }
}

function drawMain() {
    var canvas = domMain.getContext("2d")
    var hue = inputH.value;

    for(var x=0; x<400; x++){
        for(var y=0; y<400; y++){
            canvas.strokeStyle = hslToHex(hue, (x / 400)*100, (y / 400)*100);
            canvas.beginPath();
            canvas.moveTo(x, y);
            canvas.lineTo(x+1, y+1);
            canvas.stroke();
        }
    }
}

function hslText(h, s, l){
    return "hsl("+h+","+s+"%,"+l+"%)"
}

function hslToRgb(h, s, l){
    var r, g, b;

    h = parseInt(h) / 360;
    s = parseInt(s) / 100;
    l = parseInt(l) / 100;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hslToHex(h, s, l) {
    var rgb = hslToRgb(h, s, l);
    return ("rgb("+rgb.join(",")+")").colorHex();
}