/**
 * 指挥官发指令
 * 控制台操作
 */

var makeShipList = function(list){
    var html = "";
    for(var i=0; i<list.length; i++){
        html += '<li>对'+list[i]+'号飞船下指令'
           + '<button type="button" onclick="Commander.startSpaceShip('+list[i]+')">开始飞行</button>'
           +'<button type="button" onclick="Commander.stopSpaceShip('+list[i]+')">停止飞行</button>'
           + '<button type="button" onclick="Commander.destorySpaceShip('+list[i]+')">销毁</button>'
           + '</li>';
    }
    document.getElementById("shipList").innerHTML = html;
}

var Commander = {

    shipList : [],

    sendMessage : function(receiver, message, options){
        Mediator.transmit(new Command(receiver, message, options));
    },

    //发射飞船
    launchSpaceShip : function(id){
        if(this.shipList.length === 4){
            log("Commander", "已经达到最大飞船数量，不能发射新的飞船")
            return;
        }
        this.sendMessage("God", "createSpaceShip", id)

        this.shipList.push(id);
        makeShipList(this.shipList);
        log("Commander", "createSpaceShip"+" "+id);
    },

    //销毁飞船
    destorySpaceShip : function(id){
        this.sendMessage(id, "destorySpaceShip");
        for(var i=0; i<this.shipList.length; i++){
            if(this.shipList[i] === id) this.shipList.splice(i, 1);
        }
        makeShipList(this.shipList);
        log("Commander", "destorySpaceShip"+" "+id);
    },

    //开动飞船
    startSpaceShip : function(id){
        this.sendMessage(id, "startSpaceShip")
        log("Commander", "startSpaceShip"+" "+id);
    },

    //停止飞船
    stopSpaceShip : function(id){
        this.sendMessage(id, "stopSpaceShip")
        log("Commander", "stopSpaceShip"+" "+id);
    }

}