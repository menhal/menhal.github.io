/**
 * Created by Ken on 2016/3/31.
 */
(function(window, cjs, lib){
    var GAME = {}
    var stage = new cjs.Stage("stage");
    stage.enableMouseOver();
    cjs.Ticker.setFPS(lib.properties.fps);
	cjs.Touch.enable(stage);
    cjs.Ticker.addEventListener("tick", stage);

    var clock = new lib.Clock(30);
    clock.stopCount();
    clock.setTransform(880, 20);
    clock.on("timeup", function(){
        GAME.fail();
    })

    var showPlayAgain = function(){
        var btn = new lib.gameAgainBtn();
        btn.setTransform(501.5,412.3,0.794,0.794,0,0,0,71.4,72);
        new cjs.ButtonHelper(btn, 0, 1, 2, false, new lib.gameAgainBtn(), 3);
        btn.on("click", function(){
            GAME.intro();
        })
        stage.addChild(btn);
    }

    GAME.preLoad = function(){
        var text1 = new cjs.Text("Loading:0%", "20px Arial", "#000");
        var bounds = text1.getBounds();
        text1.x = (stage.canvas.width - bounds.width)/2;
        text1.y = (stage.canvas.height - bounds.height)/2;
        stage.addChild(text1);

        var queue = new cjs.LoadQueue();
        queue.installPlugin(createjs.Sound);
        cjs.Sound.alternateExtensions = ["ogg"];

        queue.on("complete", function(){
            $("#stage").css("background-image", "url(resource/bg.png)")
            GAME.init();
        });
        queue.on("progress", function() {
            text1.text = "Loading:"+Math.round(queue.progress*100)+"%";
        });

        queue.loadFile({src:"resource/bg.png", id:"room"});
        queue.loadFile({src:"resource/sound/sound.mp3", id:"intro"});
        queue.loadFile({src:"resource/sound/bg.mp3", id:"bg"});
        queue.loadFile({src:"resource/sound/dragOn.mp3", id:"dragOn"});
        queue.loadFile({src:"resource/sound/gameOver_failed.mp3", id:"failed"});
        queue.loadFile({src:"resource/sound/gameOver_success.mp3", id:"success"});
    }

    GAME.intro = function(){

        cjs.Sound.stop();
        stage.removeAllChildren();
        cjs.Sound.play("intro").on("complete", function(){
            GAME.start();
        });

        // drag
        window.drag_ball = new lib.drag_ball();
        drag_ball.setTransform(211,460,1,1,0,0,0,0,0);

        var drag_floorLamp = new lib.drag_floorLamp();
        drag_floorLamp.setTransform(589,473,1,1,0,0,0,3.5,0);

        var drag_shoes = new lib.drag_shoes();
        drag_shoes.setTransform(565.5,585.5,1,1,0,0,0,-3.7,0)

        var drag_hat = new lib.drag_hat();
        drag_hat.setTransform(339.8,579.8,1,1,0,0,0,-0.4,3)

        var drag_kite = new lib.drag_kite();
        drag_kite.setTransform(464.3,470.4,1,1,0,0,0,4,67)

        var drag_chair = new lib.drag_chair();
        drag_chair.setTransform(400.7,603.4,1,1,0,0,0,0,0)

        var drag_book = new lib.drag_book();
        drag_book.setTransform(96.1,501,1,1,0,0,0,13,20);

        // hotMap
        var hotMap_ball = new lib.hotMap_ball("synched",0);
        hotMap_ball.setTransform(238.7,364)

        var hotMap_Floorlamp = new lib.hotMap_Floorlamp("synched",0);
        hotMap_Floorlamp.setTransform(620,347,1,1,0,0,0,20,-10)

        var hotMap_shoes = new lib.hotMap_shoes("synched",0);
        hotMap_shoes.setTransform(500.2,409.8,1,1,0,0,0,-2,3)

        var hotMap_hat = new lib.hotMap_hat("synched",0);
        hotMap_hat.setTransform(412.5,279.2,1,1,0,0,0,28.6,-2)

        var hotMap_kite = new lib.hotMap_kite("synched",0);
        hotMap_kite.setTransform(69.1,247.8,1,1,0,0,0,-1.1,62)

        var hotMap_chair = new lib.hotMap_chair("synched",0);
        hotMap_chair.setTransform(707.6,553.4,1,1,0,0,0,0,0)

        var hotMap_book = new lib.hotMap_book("synched",0);
        hotMap_book.setTransform(818.1,256,1,1,0,0,0,27,27);

        stage.addChild(drag_ball,drag_floorLamp,drag_shoes,drag_hat,drag_kite,drag_chair,drag_book,hotMap_ball,hotMap_Floorlamp,hotMap_shoes,hotMap_hat,hotMap_kite,hotMap_chair,hotMap_book);

        GAME.setTarget(drag_ball, hotMap_ball);
        GAME.setTarget(drag_floorLamp, hotMap_Floorlamp);
        GAME.setTarget(drag_shoes, hotMap_shoes);
        GAME.setTarget(drag_hat, hotMap_hat);
        GAME.setTarget(drag_kite, hotMap_kite);
        GAME.setTarget(drag_chair, hotMap_chair);
        GAME.setTarget(drag_book, hotMap_book);
    }

    GAME.init = function(){
        cjs.Sound.stop();
        cjs.Sound.play("bg", {loop:-1});
        stage.removeAllChildren();

        //开始按钮
        var startBtn = new lib.gameStartBtn().setTransform(501.5,412.3,0.794,0.794,0,0,0,71.4,72)
        new cjs.ButtonHelper(startBtn, 0, 1, 2, false);
        //var title =
        startBtn.on("click", GAME.intro);
        stage.addChild(startBtn)
    }

    GAME.isStart = false;
    GAME.start = function(){
        correct = 0;
        clock.reset();
        stage.addChild(clock);
        GAME.isStart = true;
    }


    var total = 7;
    var correct = 0;

    GAME.setTarget = function(obj, target){
        target.alpha = 0.1;

        obj.on("pressmove", function(evt){
            if(!GAME.isStart) return;
            this.x = evt.stageX;
            this.y = evt.stageY
        })

        obj.on("pressup", function(){
            if(!GAME.isStart) return;
            var pt = target.localToLocal(0, 0, obj);

            if(target.hitTest(pt.x, pt.y)){
                cjs.Sound.play("dragOn")
                correct++;
                obj.x = target.x;
                obj.y = target.y;
                if(obj instanceof cjs.MovieClip) obj.gotoAndStop("stateB");
                obj.removeAllEventListeners();
                if(correct === total){
                    GAME.win();
                }
            }
        })
    }

    //停止拖拽
    GAME.stop = function(){
        clock.stopCount();
        GAME.isStart = false;
    }

    GAME.win = function(){
        cjs.Sound.stop();
        cjs.Sound.play("success")
        var face = new lib.smile();
        face.setTransform(477,314.4,1,1,0,0,0,79.2,81.4);
        stage.addChild(face);
        setTimeout(function(){
            stage.removeChild(face)
            showPlayAgain();
        }, 3000)
        GAME.stop();
    }

    GAME.fail = function(){
        cjs.Sound.stop();
        cjs.Sound.play("failed")
        var face = new lib.sad();
        face.setTransform(477,314.4,1,1,0,0,0,79.2,81.4);
        stage.addChild(face);

        setTimeout(function(){
            stage.removeChild(face)
            showPlayAgain();
        }, 3000)
        GAME.stop();
    }

    setTimeout(function(){
        GAME.preLoad();
    }, 0)

})(window, createjs, lib);
