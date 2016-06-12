var colorsList = ["brown", "yellow", "green", "blue", "pink", "black", "orange", "white", "purple", "red", "grey"]
var doubleColorsList = [
    "brown&yellow", "brown&blue", "brown&black", "brown&purple", "brown&red", "brown&grey",
    "yellow&blue", "yellow&pink", "yellow&black", "yellow&purple", "yellow&red",
    "green&orange", "green&white", "green&grey",
    "blue&pink", "blue&black", "blue&orange", "blue&white", "blue&red", "blue&grey",
    "pink&black", "pink&white", "pink&red",
    "black&orange", "black&red", "black&white", "black&grey",
    "orange&purple", "orange&red", "orange&grey",
    "white&purple", "white&red",
    "purple&red", "purple&grey",
    "red&grey"
]

var stage1Sound = [
    {id:"brown", startTime:1.135, duration:1},
    {id:"yellow", startTime:3.130, duration:1},
    {id:"green", startTime:5.5, duration:1},
    {id:"blue", startTime:7.157, duration:1},
    {id:"pink", startTime:9.244, duration:1},
    {id:"black", startTime:11.379, duration:1},
    {id:"orange", startTime:13.5, duration:1},
    {id:"white", startTime:15.6, duration:1},
    {id:"purple", startTime:17.403, duration:1},
    {id:"red", startTime:19.406, duration:1},
    {id:"grey", startTime:21.282, duration:1},
    {id:"goldenrod", startTime:23.432, duration:1},
    {id:"silver", startTime:25.391, duration:1},

    {id:"brown&yellow", startTime:28.932, duration:1.6},
    {id:"brown&blue", startTime:31.802, duration:1.6},
    {id:"brown&black", startTime:34.478, duration:1.6},
    {id:"brown&purple", startTime:37.224, duration:1.6},
    {id:"brown&red", startTime:40.000, duration:1.6},
    {id:"brown&grey", startTime:42.704, duration:1.6},
    {id:"brown&silver", startTime:45.545, duration:1.6},
    {id:"yellow&blue", startTime:48.000, duration:1.6},
    {id:"yellow&pink", startTime:50.780, duration:1.6},
    {id:"yellow&black", startTime:53.332, duration:1.6},
    {id:"yellow&purple", startTime:55.840, duration:1.6},
    {id:"yellow&red", startTime:58.509, duration:1.8},
    {id:"yellow&silver", startTime:61.394, duration:1.6},
    {id:"green&orange", startTime:64.000, duration:1.6},
    {id:"green&white", startTime:66.696, duration:1.6},
    {id:"green&grey", startTime:69.187, duration:1.6},
    {id:"green&silver", startTime:72.000, duration:1.6},
    {id:"blue&pink", startTime:74.562, duration:1.6},
    {id:"blue&black", startTime:77.429, duration:1.6},
    {id:"blue&orange", startTime:80.289, duration:1.6},
    {id:"blue&white", startTime:83.094, duration:1.6},
    {id:"blue&red", startTime:85.726, duration:1.6},
    {id:"blue&grey", startTime:88.25, duration:1.6},
    {id:"pink&black", startTime:90.939, duration:1.6},
    {id:"pink&white", startTime:93.642, duration:1.6},
    {id:"pink&red", startTime:96.000, duration:1.6},
    {id:"black&orange", startTime:98.783, duration:1.6},
    {id:"black&red", startTime:101.335, duration:1.6},
    {id:"black&white", startTime:103.677, duration:1.6},
    {id:"black&grey", startTime:106.294, duration:1.6},
    {id:"black&silver", startTime:109.005, duration:1.6},
    {id:"orange&purple", startTime:111.559, duration:1.6},
    {id:"orange&red", startTime:114, duration:1.6},
    {id:"orange&grey", startTime:116.454, duration:1.6},
    {id:"white&purple", startTime:118.894, duration:1.6},
    {id:"white&red", startTime:121.433, duration:1.6},
    {id:"purple&red", startTime:123.844, duration:1.6},
    {id:"purple&grey", startTime:126.147, duration:1.6},
    {id:"purple&silver", startTime:128.522, duration:1.6},
    {id:"red&grey", startTime:131, duration:1.6},
    {id:"red&silver", startTime:133.653, duration:1.6},
    {id:"grey&silver", startTime:136.109, duration:1.6},

]

for(var i=0; i<stage1Sound.length; i++){
    stage1Sound[i].startTime = stage1Sound[i].startTime * 1000;
    stage1Sound[i].duration = stage1Sound[i].duration * 1000;
    stage1Sound[i].color =  stage1Sound[i].id;
    stage1Sound[i].id =  stage1Sound[i].id+"_cn";
}

var stage2Sound = [
    {id:"brown", startTime:0.3, duration:1},
    {id:"yellow", startTime:2.5, duration:1},
    {id:"green", startTime:5.0, duration:1},
    {id:"blue", startTime:7.545, duration:1},
    {id:"pink", startTime:10.000, duration:1},
    {id:"black", startTime:12.341, duration:1},
    {id:"orange", startTime:14.356, duration:1},
    {id:"white", startTime:16.585, duration:1},
    {id:"purple", startTime:18.843, duration:1},
    {id:"red", startTime:20.953, duration:1},
    {id:"grey", startTime:23.057, duration:1},
    {id:"goldenrod", startTime:25.0, duration:1},
    {id:"silver", startTime:27.257, duration:1},
    {id:"brown&yellow", startTime:30.523, duration:2},
    {id:"brown&blue", startTime:33.831, duration:2},
    {id:"brown&black", startTime:36.76, duration:2},
    {id:"brown&purple", startTime:40.105, duration:2},
    {id:"brown&red", startTime:43.202, duration:2},
    {id:"brown&grey", startTime:46.523, duration:2},
    {id:"brown&silver", startTime:49.826, duration:2},
    {id:"yellow&blue", startTime:53.114, duration:2},
    {id:"yellow&pink", startTime:56.498, duration:2},
    {id:"yellow&black", startTime:59.723, duration:2},
    {id:"yellow&purple", startTime:62.901, duration:2},
    {id:"yellow&red", startTime:66.383, duration:2},
    {id:"yellow&green", startTime:69.849, duration:2},
    {id:"green&orange", startTime:73.145, duration:2},
    {id:"green&white", startTime:76.612, duration:2},
    {id:"green&grey", startTime:79.852, duration:2},
    {id:"green&silver", startTime:82.876, duration:2},
    {id:"blue&pink", startTime:86.0, duration:2},
    {id:"blue&black", startTime:89.106, duration:2},
    {id:"blue&orange", startTime:92.252, duration:2},
    {id:"blue&white", startTime:95.309, duration:2},
    {id:"blue&red", startTime:98.249, duration:2},
    {id:"blue&grey", startTime:101.469, duration:2},
    {id:"pink&black", startTime:104.615, duration:2},
    {id:"pink&white", startTime:107.774, duration:2},
    {id:"pink&red", startTime:110.55, duration:2},
    {id:"ping&goldenrod", startTime:113.322, duration:2},
    {id:"black&orange", startTime:116.356, duration:2},
    {id:"black&red", startTime:119.637, duration:2},
    {id:"black&white", startTime:122.497, duration:2},
    {id:"black&grey", startTime:125.65, duration:2},
    {id:"black&silver", startTime:128.454, duration:2},
    {id:"orange&purple", startTime:131.514, duration:2},
    {id:"orange&red", startTime:134.516, duration:2},
    {id:"orange&grey", startTime:137.27, duration:2},
    {id:"white&purple", startTime:140.304, duration:2},
    {id:"white&red", startTime:143.518, duration:2},
    {id:"purple&red", startTime:146.626, duration:2},
    {id:"purple&grey", startTime:149.408, duration:2},
    {id:"purple&silver", startTime:152.494, duration:2},
    {id:"red&grey", startTime:155.435, duration:2},
    {id:"red&silver", startTime:158.659, duration:2},
    {id:"grey&silver", startTime:161.916, duration:2},
]

for(var i=0; i<stage2Sound.length; i++){
    stage2Sound[i].startTime = stage2Sound[i].startTime * 1000;
    stage2Sound[i].duration = stage2Sound[i].duration * 1000;
    stage2Sound[i].color =  stage2Sound[i].id;
    stage2Sound[i].id =  stage2Sound[i].id+"_en";
}

var stage3Sound = [
    {id:"green", correct:"orange", startTime:0.685, duration:3.5},
    {id:"white", correct:"black", startTime:6, duration:3.5},
    {id:"black", correct:"white", startTime:11.446, duration:3.5},
    {id:"blue", correct:"yellow", startTime:16.981, duration:3.5},
    {id:"yellow", correct:"purple", startTime:22.337, duration:3.5},
    {id:"brown", correct:"orange", startTime:28, duration:3.5},
    {id:"orange", correct:"green", startTime:33.61, duration:3.5},
    {id:"red", correct:"brown", startTime:38.792, duration:3.5},
]

for(var i=0; i<stage3Sound.length; i++){
    stage3Sound[i].startTime = stage3Sound[i].startTime * 1000;
    stage3Sound[i].duration = stage3Sound[i].duration * 1000;
    stage3Sound[i].word =  stage3Sound[i].id;
    stage3Sound[i].id =  stage3Sound[i].id+"_stage3";
}

function colorAdjust(color) {
    if(color === 'goldenrod') return "#F6AB00";
    if(color === 'purple') return "#6F186E";
    if(color === 'brown') return "#6A4B23";
    if(color === 'orange') return "#EA5520";

    return color;
}
