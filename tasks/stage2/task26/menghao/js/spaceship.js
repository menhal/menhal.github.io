/**
 * 飞船的创建，销毁，飞行
 * 动力系统
 * 指令接受
 */
var SpaceShip = function(id){

    var ship = this;
    var dom;
    var position = 0;

    //能源系统
    var power = (function(){
        var amount = 100;
        var showPower = function(){
            dom.childNodes[1].innerText = Math.ceil(amount)+"%";
        }
        //showPower();

        return new function (){
            var charge = function(num){
                amount = Math.min(amount+num, 100);
                showPower();
            }

            //消耗能量，能量不够时返回false
            this.use = function(num){
                if(amount < num) return false;
                amount = Math.max(amount - num, 0);
                showPower();
                return true;
            }

            //每秒钟增加2%
            setInterval(function(){
                charge(2);
            }, 1000)
        }
    })();

    //动力系统
    var engine = (function(power){
        var interval;
        var speed = 50;
        var isStart = false;

        return new function (){
            var eg = this;
            this.start = function(){
                if(isStart) return;
                isStart = true;
                interval = setInterval(function(){
                    if(!power.use(0.1)) {
                        eg.stop();
                        return;
                    }
                    dom.style.transform = "rotate("+(position++ % 360)+"deg)";
                }, 1000 / speed);
            }

            this.stop = function(){
                if(!isStart) return;
                isStart = false;
                clearInterval(interval);
            }
        }
    })(power);

    //销毁飞船
    var destory = function(){
        writelog("自毁程序已启动");

        for(var index=0; index< document.getElementById("planet").childNodes.length; index++){
            if(document.getElementById("planet").childNodes[index].id === 'spaceship'+id){
                document.getElementById("planet").removeChild(document.getElementById("planet").childNodes[index])
            }
        }
    }

    //开始
    var start = function(){
        engine.start();
        writelog("进入飞行状态");
    }

    //停止
    var stop = function(){
        engine.stop();
        writelog("停止飞行");
    }

    //接收消息
    var onReceiveMessage = function(cmd){
        if(cmd.receiver !== id) return;

        switch (cmd.message){
            case 'startSpaceShip' :
                start();
                break;

            case "stopSpaceShip" :
                stop();
                break;

            case "destorySpaceShip" :
                destory();
                break;
        }
    }

    var create = function(){
        Mediator.addListener(onReceiveMessage);

        dom = document.createElement("div");
        dom.setAttribute("id", "spaceship"+id);
        dom.setAttribute("class", "spaceship");
        dom.innerHTML = id + "号<span>100%</span>";
        document.getElementById("planet").appendChild(dom);
        writelog("新的飞船已经进入轨道");
    }

    var writelog = function(message){
        log("Ship"+id, message);
    }
    create();
}