//指令类
var Command = function(receiver, message, options){
    this.receiver = receiver;
    this.message = message;
    this.options = options;
};

/**
 * 日志类
 * 记录日志的来源，内容，并显示在控制台
 */

var log = function(from, message){
    var p = document.createElement("p");
    p.innerText = from+":"+message;
    document.getElementById("log").appendChild(p)
    document.getElementById("log").scrollTop = 99999;
};