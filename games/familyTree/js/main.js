/**
 * Created by Ken on 2016/3/31.
 */
(function(window, cjs, lib){
    var GAME = {}
    var stage = new cjs.Stage("stage");
    cjs.Ticker.setFPS(lib.properties.fps);
    cjs.Ticker.addEventListener("tick", stage);
	cjs.Touch.enable(stage);
    stage.enableMouseOver();

    var clock = new lib.Clock(80);
    clock.stopCount();
    clock.setTransform(880, 20);
    clock.on("timeup", function(){
        GAME.fail();
    })

    var blankSpace = [];
    var character = [];
    var count = 0; //meimei算已完成的
    var showPlayAgain = function(){
        var btn = new lib.gameAgainBtn();
        btn.setTransform(501.5,412.3,0.794,0.794,0,0,0,71.4,72);
        new cjs.ButtonHelper(btn, 0, 1, 2, false, new lib.gameAgainBtn(), 3);
        btn.on("click", function(){
            GAME.intro();
        })
        stage.addChild(btn);
    }

    GAME.preLoad = function(soundData){
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

        //queue.loadFile({src:"resource/sound/sound1.mp3", id:"intro"});
        queue.loadFile({id:"sound", src:"resource/sound/sound1.mp3", data:{audioSprite: soundData}});
        queue.loadFile({id:"bg", src:"resource/sound/bg.mp3"});
        queue.loadFile({id:"dragOn", src:"resource/sound/dragOn.mp3"});
        queue.loadFile({id:"gameOver_failed", src:"resource/sound/gameOver_failed.mp3"});
        queue.loadFile({id:"gameOver_success", src:"resource/sound/gameOver_success.mp3"});
		queue.loadFile({src:"resource/sound/timer.mp3", id:"timer"});
    }

    GAME.init = function(){
        cjs.Sound.stop();
        cjs.Sound.play("bg", {loop:-1});
        stage.removeAllChildren();
        //开始按钮
        var startBtn = new lib.gameStartBtn().setTransform(501.5,412.3,0.794,0.794,0,0,0,71.4,72)
        new cjs.ButtonHelper(startBtn, 0, 1, 2, false);
        startBtn.on("click", GAME.intro);

        //背景色
        var bg = new lib.backGround();

        //游戏标题
        var gameTitle = new lib.gameTile().setTransform(475.5,241.8,1,1,0,0,0,297.7,64);
        gameTitle.alpha = 0;
        cjs.Tween.get(gameTitle).to({alpha: 1}, 500).to({y:240}, 500)

        //场景初始化
        stage.addChild(bg, startBtn, gameTitle);
    }

    GAME.intro = function(){
        cjs.Sound.stop();

        count = 0;
        blankSpace = [];
        character = [];
        //alert("游戏开始")
        stage.removeAllChildren();
        var bg = new lib.backGround();
        var tree = new lib.mapLine().setTransform(506,213.6,1,1,0,0,0,286.5,112.2);

        stage.addChild(bg, tree);

        //blankSpace.push(new lib.BlankSpace(["meimei"], 228.6,353.3));
        blankSpace.push(new lib.BlankSpace(["carol","abel"], 427.6,97.4));
        blankSpace.push(new lib.BlankSpace(["carol","abel"], 568.9,97.4));
        blankSpace.push(new lib.BlankSpace(["mike"], 181.5,224.1));
        blankSpace.push(new lib.BlankSpace(["allen"], 279.3,224.1));
        blankSpace.push(new lib.BlankSpace(["mary"], 427.6,224.1)); //5
        //blankSpace.push(new lib.BlankSpace(["steven"], 525.3,224.1));
        blankSpace.push(new lib.BlankSpace(["tim"], 691.7,224.1)); //7
        //blankSpace.push(new lib.BlankSpace(["jenny"], 789.8,224.1));
        blankSpace.push(new lib.BlankSpace(["lisa","johns"], 427.6,353.3)); //9
        blankSpace.push(new lib.BlankSpace(["lisa","johns"], 525.2,353.3)); //10
        blankSpace.push(new lib.BlankSpace(["anna","david"], 691.7,353.3)); //11
        blankSpace.push(new lib.BlankSpace(["anna","david"], 789.9,353.3)); //12

        blankSpace.map(function(obj){
            stage.addChild(obj)
        })

        var shape = new cjs.Shape();
        shape.graphics.f("#339999").s().p("EhJ5AMQQB2rRh2r2UBLagCwBIZACwQhhMKBhK9UhJTgA8hKgAA8g");
        shape.setTransform(480.1,554.7);
        var gameTitle = new lib.gameTile().setTransform(466,468.3,0.562,0.562,0,0,0,297.7,64);
        var meimei = new lib.fig_meimei();
        var jenny = new lib.fig_jenny();
        var jenny_space = new lib.BlankSpace(["jenny"], 789.8,224.1);
        var steven = new lib.fig_steven();
        var steven_space = new lib.BlankSpace(["steven"], 525.3,224.1)
        meimei.setTransform(188, 312, 1.2, 1.2).stop();
        jenny.setTransform(750,184, 1.18, 1.18);
        steven.setTransform(486.3,184.1, 1.18, 1.18);
        stage.addChild(shape, gameTitle, meimei, jenny_space, jenny, steven_space, steven);

        //添加角色
        character.push(new lib.Character("mary", new lib.fig_mary()));
        character.push(new lib.Character("lisa", new lib.fig_lisa()));
        character.push(new lib.Character("johns", new lib.fig_johns()));
        //character.push(new lib.Character("steven", new lib.fig_steven()));
        character.push(new lib.Character("david", new lib.fig_david()));
        character.push(new lib.Character("anna", new lib.fig_anna()));
        //character.push(new lib.Character("jenny", new lib.fig_jenny()));
        character.push(new lib.Character("tim", new lib.fig_tim()));
        character.push(new lib.Character("abel", new lib.fig_abel()));
        character.push(new lib.Character("carol", new lib.fig_carol()));
        character.push(new lib.Character("allen", new lib.fig_allen()));
        character.push(new lib.Character("mike", new lib.fig_mike()));

        meimei.play();
        cjs.Sound.play("intro");

        var names = _.pluck(character, 'name');
        var tracks = _.map(names, function(name, index){
            var num = index+3 > 9 ? index+3 : "0"+(index +3);
            var id = "Marker"+num+"_"+name.replace(/(\w)/,function(v){return v.toUpperCase()});

            (function(){
                var cid = index;
                setTimeout(function(){
                    _.find(character, function(c){
                        return c.name === names[cid];
                    }).jump();
                }, gameData[index+2].jump-1300)
            })();
            return id
        })

        //播放介绍
        cjs.Sound.play("sound", {startTime:2000, duration:72000}).on("complete", function(){
            meimei.gotoAndStop(0);
        })

        //将角色放到画布上
        var x = 0;
        character = _.shuffle(character)
        character.map(function(obj){
            obj.setPosition(x+=88, 560);
            stage.addChild(obj)
        })

        GAME.start();
    }

    GAME.start = function(){
        clock.reset();
        stage.addChild(clock);

        for(var i in character){
            character[i].on("pressmove", function(evt){
                this.drag = true;
                this.stage.setChildIndex(this, this.stage.children.length-1);
                this.setPosition(evt.stageX, evt.stageY);
            })
        }
    }

    //停止拖拽
    GAME.stop = function(){
        clock.stopCount();
        for(var i in character){
            character[i].removeAllEventListeners();
        }
    }

    GAME.win = function(){
        cjs.Sound.play("gameOver_success")
        var face = new lib.smile();
        face.setTransform(477,314.4,1,1,0,0,0,79.2,81.4);
        stage.addChild(face);
		setTimeout(function(){
            stage.removeChild(face);
            showPlayAgain();
        }, 3000)
        GAME.stop();
    }

    GAME.fail = function(){
        var face = new lib.sad();
        cjs.Sound.play("gameOver_failed")
        face.setTransform(477,314.4,1,1,0,0,0,79.2,81.4);
        stage.addChild(face);
		setTimeout(function(){
            stage.removeChild(face);
            showPlayAgain();
        }, 3000)
        GAME.stop();
    }

    GAME.check = function(){
        var allCorrect = true;

        for(var i=0; i<blankSpace.length; i++){
            var space = blankSpace[i];
            if(space.isEmpty()) {
                return;
            }
            var iscorrect = space.check();
            allCorrect = allCorrect && iscorrect;
        }

        allCorrect ? GAME.win() : GAME.fail();
    }

    stage.on("character.drop", function(evt){
        for(var i=0; i<blankSpace.length; i++){
            var space = blankSpace[i];
            var pt = evt.character.localToLocal(30, 40, space);
            if (evt.character.hitTest(pt.x, pt.y)) {
                if(space.fill(evt.character)) {
                    cjs.Sound.play("dragOn")
                    count ++;
                    if(count === blankSpace.length) GAME.check(); //已完成数跟总数一致则检查游戏
                    return;
                }
            }
        }
        evt.character.goBack();
    })

    stage.on("character.remove", function(evt){
        count --;
    })


    GAME.soundData = gameData;
    GAME.preLoad(GAME.soundData);

    //setTimeout(function(){
    //    for(var i=0; i<character.length; i++){
    //        blankSpace[i+1].fill(character[i]);
    //    }
    //    GAME.check();
    //}, 1000)

})(window, createjs, lib);

function parseXml (xml){
    //var text = $(xml).toObject();
    var arr = [];
    $(xml).children().each(function(i, obj){
        if(obj.tagName === 'xmpDM:startTime'){
            var data = {};
            var indexs = ["startTime", "duration", "id"]
            $(obj).parent().children().each(function(i, o){
                if(i === 0){
                    data["startTime"] = Math.round($(o).text().trim() / 100);
                }
                if(i === 1){
                    data["duration"] = Math.round($(o).text().trim() / 100);
                }
                if(i === 2){
                    data["id"] = $(o).text();
                }
            })
            arr.push(data)
        }else{
            var data = parseXml(obj)
            for(var i in data){
                arr.push(data[i]);
            }
        }
    })
    return arr;
}

//角色
(lib.Character = function(name, graphic){
    var self = graphic;
    self.name = name;
    self.setTransform(0,0,1,1,0,0,0,30,40);

    var oldx, oldy;
    self.setPosition = function(x, y){
        self.x = x;
        self.y = y;
        if(oldx === undefined) oldx = x;
        if(oldy === undefined) oldy = y;
    }

    self.setCache = function(){
        return self.cache(-1, -1, 100, 100, 1.5);
    }

    //回到起始位置
    self.goBack = function(){
        self.setPosition(oldx, oldy);
    }

    self.jump = function(){
        if(self.scaleX > 1.1) return; //已经放好的不跳
        if(self.drag) return; //正在拖放的不跳
        createjs.Tween.get(self)
            .to({y:oldy-30}, 200).to({y:oldy}, 200)
            .to({y:oldy-30}, 200).to({y:oldy}, 200)
    }

    //松开角色
    self.on("pressup", function(evt){
        self.drag = false;
        var event = new createjs.Event("character.drop");
        event.x = evt.stageX;
        event.y = evt.stageY;
        event.character = self;
        self.stage.dispatchEvent(event);
    })

    self.on("pressmove", function(){
        if(!self.place) return;
        self.place.remove();
        self.place = null;
        self.scaleX = 1;
        self.scaleY = 1;

        var event = new createjs.Event("character.remove");
        self.stage.dispatchEvent(event);
    })

    self.setCache();
    return self;
});



//空白圆圈
(lib.BlankSpace = function(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
    this.regX = 40;
    this.regY = 40;
    this.character;

    this.fill = function (character) {
        if(!this.isEmpty()) return false;
        character.x = this.x - 4;
        character.y = this.y + 8;
        character.scaleX = 1.18;
        character.scaleY = 1.18;
        character.updateCache();
        //character.shape_13.alpha = 0
        this.character = character;
        character.place = this;
        // character.removeAllEventListeners();
        return true;
    }

    this.remove = function(){
        this.character = undefined;
    }

    this.isEmpty = function(){
        return this.character === undefined;
    }

    this.isCorrect = function(){
        if(this.isEmpty()) return false;
        if(_.indexOf(this.name, this.character.name) === -1) return false;
        return true;
    }

    this.check = function(){
        if(this.isCorrect()) return true;
        var cross = new lib.cross();
        cross.setTransform(this.x,this.y,1,1,0,0,0,19.9,22.4);
        this.stage.addChild(cross);
        return false;
    }

    this.cache(-1, -1, 80, 80, 1.5);
}).prototype = new lib.whiteBall();
