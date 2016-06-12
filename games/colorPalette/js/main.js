/**
 * Created by Ken on 2016/3/31.
 */
(function(window, cjs, lib){
    var GAME = {}
    var stage = new cjs.Stage("stage");
    cjs.Ticker.setFPS(lib.properties.fps);
	cjs.Touch.enable(stage);
    cjs.Ticker.addEventListener("tick", stage);
	cjs.Touch.enable(stage);
    stage.enableMouseOver();

    var showPlayAgain = function(stagenum){
        var btn = new lib.gameAgainBtn();
        btn.setTransform(501.5,412.3,0.794,0.794,0,0,0,71.4,72);
        new cjs.ButtonHelper(btn, 0, 1, 2, false, new lib.gameAgainBtn(), 3);

        var gameTitle = new lib.gameTitle().setTransform(475.5,241.8,1,1,0,0,0,297.7,64);
        gameTitle.alpha = 0;
        cjs.Tween.get(gameTitle).to({alpha: 1}, 500).to({y:240}, 500)

        btn.on("click", function(){
            GAME["stage1"]();
        })
        stage.addChild(btn, gameTitle);
    }

	GAME.showStage = function (num) {
        var stage1Bg = new lib.stageBg();
        stage1Bg.setTransform(480.1,358.2,1,1,0,0,0,450,267.9);
        stage.removeAllChildren();

        var gameTitle = new lib.gameTitle().setTransform(475.5,241.8,1,1,0,0,0,297.7,64);
        gameTitle.setTransform(314,40,0.5,0.5)

        stage.addChild(stage1Bg, gameTitle);
        createjs.Sound.stop();
        stage1Bg.gotoAndPlay("stage"+num);
        setTimeout(function(){
            stage.removeChild(stage1Bg);
            GAME["stage"+num]();
        }, 3000)
    }

    GAME.preLoad = function(data1, data2, data3){
        GAME.data1 = stage1Sound;
        GAME.data2 = data2;
        GAME.data3 = data3;

        var text1 = new cjs.Text("Loading:0%", "20px Arial", "#000");
        var bounds = text1.getBounds();
        text1.x = (stage.canvas.width - bounds.width)/2;
        text1.y = (stage.canvas.height - bounds.height)/2;
        stage.addChild(text1);

        var queue = new cjs.LoadQueue();
        queue.installPlugin(createjs.Sound);
        cjs.Sound.alternateExtensions = ["ogg"];

        queue.on("complete", function(){
            GAME.init();
        });
        queue.on("progress", function() {
            text1.text = "Loading:"+Math.round(queue.progress*100)+"%";
        });
        queue.loadFile({id:"sound1", src:"resource/sound/colorStage1.mp3", data:{audioSprite: stage1Sound}});
        queue.loadFile({id:"sound2", src:"resource/sound/colorStage2.mp3", data:{audioSprite: stage2Sound}});
        queue.loadFile({id:"sound3", src:"resource/sound/colorStage3.mp3", data:{audioSprite: stage3Sound}});
        queue.loadFile({id:"bing", src:"resource/sound/right.mp3"});
        queue.loadFile({id:"ao", src:"resource/sound/ao.mp3"});
        queue.loadFile({id:"bg", src:"resource/sound/bg.mp3"});
        queue.loadFile({id:"success", src:"resource/sound/gameOver_success.mp3"});
        queue.loadFile({id:"failed", src:"resource/sound/gameOver_failed.mp3"});
    }

    GAME.init = function(){
        stage.removeAllChildren();
        var startBtn = new lib.gameStartBtn().setTransform(501.5,412.3,0.794,0.794,0,0,0,71.4,72)
        new cjs.ButtonHelper(startBtn, 0, 1, 2, false);
        cjs.Sound.play("bg", {loop:-1});
        startBtn.on("click", function(){
            GAME.showStage(1);
        });

        var gameTitle = new lib.gameTitle().setTransform(475.5,241.8,1,1,0,0,0,297.7,64);
        gameTitle.alpha = 0;
        cjs.Tween.get(gameTitle).to({alpha: 1}, 500).to({y:240}, 500)

        //场景初始化
        stage.addChild(startBtn, gameTitle);
    }

    GAME.say = function(lang, color){
        cjs.Sound.stop();
        if(typeof color === "string"){
            return cjs.Sound.play(color+"_"+lang)
        }else{
            return cjs.Sound.play(color[0]+"&"+color[1]+"_"+lang)
        }
    }

    GAME.stage1 = function(){
        stage.removeAllChildren();

        var keyboard = new lib.keyboard();
        keyboard.setTransform(483.2,349.4,1,1,0,0,0,457.1,178.8);
        var colorRect = new lib.colorRect("red");
        colorRect.setTransform(222,67);
        var doubleColorRect = new lib.doubleColorRect();
        doubleColorRect.setTransform(222,67);

        var inputText = new cjs.Text("", "50px 'Helvetica'");
        inputText.name = "inputText";
        inputText.textAlign = "center";
        inputText.lineHeight = 52;
        inputText.lineWidth = 316;
        inputText.setTransform(580.2,85.8);
        var inputBox = new lib.inputBox("synched",0);
        inputBox.setTransform(582.2,113.8,1,1,0,0,0,187.1,42);

        var progress = new lib.progress();
        progress.gotoAndStop(0);
        progress.setTransform(320, 550)
        stage.addChild(progress);

        keyboard.on("keypress", function(evt){
            var str = evt.keycode;
            if(str === "backspace"){
                inputText.text = inputText.text.substring(0,inputText.text.length-1);
            }else if(str === "enter"){
                inputText.text = $.trim(inputText.text);
                var event = new createjs.Event("textchange");
                inputText.dispatchEvent(event);
                inputText.text = "";
            }else{
                inputText.text += str;
            }
        })
        stage.addChild(keyboard, inputBox, inputText, colorRect, progress);


        //打乱顺序
        var index = 0, max = 5, right = 0;
        var colors = new lib.colors();
        var loading = false;


        var onRight = function(){
            right++;
            createjs.Sound.play("bing");
        }

        var onWrong = function(){
            createjs.Sound.play("ao");

            setTimeout(function(){
                if(progress.currentFrame <=5){
                    showSingle();
                }else{
                    showDouble();
                }
            }, 1000)
        }

        var showSingle = function(){
            index = 0; right = 0;
            var data = colors.createSingleList(max, 2);
            inputText.removeAllEventListeners();
            progress.gotoAndStop(index);
            inputText.on("textchange", function(){
                if(loading) return;
                var text= inputText.text;
                var realText = data[index][0];
                var result = text === realText;

                result ? onRight() : onWrong();
                if(!result) return;
                progress.gotoAndStop(index+1);
                if(index === data.length - 1){
                    setTimeout(function(){
                        showDouble();
                    }, 2000)
                    return;
                }
                index ++;

                loading = true;
                setTimeout(function(){
                    colorRect.changeColor(data[index][0]);
                    GAME.say("cn", data[index][0])
                    loading = false;
                }, 2000)
            })
            colorRect.changeColor(data[index][0])
            GAME.say("cn", data[index][0])
        }

        var showDouble = function(){
            index = 0;
            stage.removeChild(colorRect);
            stage.addChild(doubleColorRect);
            inputText.removeAllEventListeners();
            progress.gotoAndStop(5);

            var data = colors.createDoubleList(max, 2);
            inputText.on("textchange", function(evt){
                if(loading) return;
                var text= inputText.text;
                var realText = data[index][0][0]+" "+data[index][0][1];
                var result = text === realText;

                result ? onRight() : onWrong();
                if(!result) return;
                progress.gotoAndStop(index+6);
                if(index === data.length - 1){
                    setTimeout(function(){
                        GAME.showStage(2);
                    }, 2000)
                    return;
                }
                index ++;

                loading = true;
                setTimeout(function(){
                    doubleColorRect.changeColor(data[index][0]);
                    GAME.say("cn", data[index][0]);
                    loading = false;
                }, 2000)
            });
            doubleColorRect.changeColor(data[index][0])
            GAME.say("cn", data[index][0])
        }
        showSingle();
    }

    GAME.stage2 = function(){
        stage.removeAllChildren();

        var singleBox = new lib.singleColorBox(false, 2000);
        singleBox.setTransform(280, 200)

        var doubleBox = new lib.doubleColorBox(2000);
        doubleBox.setTransform(280, 200);

        var progress = new lib.progress();
        progress.gotoAndStop(0);
        progress.setTransform(320, 500)
        stage.addChild(progress);

        //打乱顺序
        var index = 0, max = 5, right = 0;
        var colors = new lib.colors();

        //显示单色选择
        var showSingle = function(){
            stage.removeChild(doubleBox);
            stage.addChild(singleBox);
            index = 0;
            progress.gotoAndStop(0);

            var data = colors.createSingleList(max, 2);
            singleBox.onChoose = function(result){
                if(!result) {
                    showSingle();
                    return;
                }
                progress.gotoAndStop(index+1);
                if(index === data.length - 1){
                    showDouble();
                    return;
                }
                index ++;
                singleBox.changeColor(data[index][0], data[index][1], data[index][2], data[index][3]);
                GAME.say("en", data[index][0]).on("complete", function(){
                    singleBox.startTimeout();
                })
            }
            singleBox.changeColor(data[index][0], data[index][1], data[index][2], data[index][3])
            GAME.say("en", data[index][0]).on("complete", function(){
                singleBox.startTimeout();
            })
        }

        //显示双色选择
        var showDouble = function(){
            index = 0;
            stage.removeChild(singleBox);
            stage.addChild(doubleBox);
            progress.gotoAndStop(5);

            var data = colors.createDoubleList(max, 2);
            doubleBox.onChoose = function(result){
                if(!result) {
                    showDouble();
                    return;
                }
                progress.gotoAndStop(index+6);
                if(index === data.length - 1){
                    GAME.showStage(3);
                    return;
                }
                index ++;
                doubleBox.changeColor(data[index][0], data[index][1], data[index][2], data[index][3]);
                GAME.say("en", data[index][0]).on("complete", function(){
                    doubleBox.startTimeout();
                })
            }
            doubleBox.changeColor(data[index][0], data[index][1], data[index][2], data[index][3])
            GAME.say("en", data[index][0]).on("complete", function(){
                doubleBox.startTimeout();
            })
        }
        showSingle();
    }

    GAME.stage3 = function(){
        stage.removeAllChildren();
        var palette = new lib.palette("synched",0);
        palette.setTransform(335.6,346.2,1,1,0,0,0,222.1,146.6);

        var colors = new lib.colors();
        var data = colors.createPaletteList();
        var singleBox = new lib.singleColorBox(true, 2000);
        var index = 0, right = 0;
        singleBox.setTransform(700, 150)

        singleBox.onChoose = function(result){
            if(!result) {
                singleBox.changeColor(data[index][1], data[index][2], data[index][3], data[index][4])
                GAME.say("stage3", data[index][0]).on("complete", function(){
                    singleBox.startTimeout();
                })
                return;
            }
            createjs.Sound.stop();
            if(index === data.length - 1){
                GAME.win();
                return;
            }
            index ++;
            singleBox.changeColor(data[index][1], data[index][2], data[index][3], data[index][4]);
            GAME.say("stage3", data[index][0]).on("complete", function(){
                singleBox.startTimeout();
            })
        }
        singleBox.changeColor(data[index][1], data[index][2], data[index][3], data[index][4])
        GAME.say("stage3", data[index][0]).on("complete", function(){
            singleBox.startTimeout();
        })

        stage.addChild(palette, singleBox)
    }

    GAME.win = function(){
        stage.removeAllChildren();
        createjs.Sound.stop();
        cjs.Sound.play("success")
        stage.removeAllChildren();
        var face = new lib.smile();
        face.setTransform(477,314.4,1,1,0,0,0,79.2,81.4);
        stage.addChild(face);

        setTimeout(function(){
            stage.removeChild(face);
            showPlayAgain(1);
        }, 3000)
    }

    GAME.fail = function(stagenum){
        stage.removeAllChildren();
        cjs.Sound.stop();
        cjs.Sound.play("failed")
        var face = new lib.sad();
        face.setTransform(477,314.4,1,1,0,0,0,79.2,81.4);
        stage.addChild(face);
        setTimeout(function(){
            stage.removeChild(face);
            showPlayAgain(stagenum);
        }, 3000)
    }

    GAME.preLoad();

    function processData(data){
        for(var i in data){
            data[i].startTime = str2sec(data[i].startTime);
            data[i].duration = str2sec(data[i].duration);
        }
        return data;
    }

    function str2sec(str){
        var arr = str.split(":");
        return (Number(arr[0]) * 60 + Number(arr[1])) * 1000;
    }

})(window, createjs, lib);
