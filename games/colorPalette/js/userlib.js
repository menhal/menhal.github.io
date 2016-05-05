
//色块
(lib.colorRect = function(color){
    this.initialize();
    this.color = color;
    this.cursor = 'pointer';

    // Layer 1
    this.shape = new createjs.Shape();
    this.shape.graphics.f(color).s("#000000").drawRect(0,0,100,100);
    this.addChild(this.shape);

    this.on("click", function(){
        var event = new createjs.Event("selectcolor");
        event.color = this.color;
        event.x = this.x;
        event.y = this.y;
        this.parent.dispatchEvent(event);
    })

    this.changeColor = function(color){
        this.color = color;
        this.shape.graphics.f(colorAdjust(color)).drawRect(0,0,100,100);
    }
}).prototype = p = new createjs.Container();

//双色块
(lib.doubleColorRect = function(){
    this.initialize();
    this.color = [];
    this.cursor = 'pointer';

    // Layer 1
    this.shape = new createjs.Shape();
    this.shape.graphics.s("#000000").drawRect(0,0,100,100);
    this.addChild(this.shape);

    this.on("click", function(){
        var event = new createjs.Event("selectcolor");
        event.color = this.color;
        event.x = this.x;
        event.y = this.y;
        this.parent.dispatchEvent(event);
    })

    this.changeColor = function(color){
        this.color = color;
        this.shape.graphics.f(colorAdjust(color[0])).drawRect(0,0,50,100);
        this.shape.graphics.f(colorAdjust(color[1])).drawRect(50,0,50,100);
    }
}).prototype = p = new createjs.Container();


(lib.colors = function(){
    var colors = colorsList;
    var doubleColors = [];

    var createDoubleColors = function(){
        var num = doubleColorsList.length;
        for(var i=0; i<num; i++){
            doubleColors.push(doubleColorsList[i].split("&"))
        }
    }
    createDoubleColors();

    //生成单色列表
    this.createSingleList = function(num1, num2){
        var dstColors = chooseColors(num1); //主颜色
        var data = [];
        for(var i=0; i<num1; i++){
            var oth = chooseOtherColor(dstColors[i], num2) //选择主颜色以外的选项
            oth.push(dstColors[i]) //把主颜色放入选项
            oth = _.shuffle(oth)  //打乱选项顺序
            oth.unshift(dstColors[i])  //把主颜色放在第一位
            data.push(oth)
        }
        return data;
    }

    //生成双色列表
    this.createDoubleList = function(num1, num2){
        var dstColors = chooseDoubleColors(num1); //主颜色
        var data = [];
        for(var i=0; i<num1; i++){
            var oth = chooseOtherDoubleColor(dstColors[i], num2) //选择主颜色以外的选项
            oth.push(dstColors[i]) //把主颜色放入选项
            oth = _.shuffle(oth)  //打乱选项顺序
            oth.unshift(dstColors[i])  //把主颜色放在第一位
            data.push(oth)
        }
        return data;
    }

    //生成色板列表
    this.createPaletteList = function(){
        var palette = _.shuffle(stage3Sound);
        var data = [];
        for(var i=0; i<palette.length; i++){
            var item = [palette[i].word, palette[i].correct]
            var oth = chooseOtherColor(item, 1)[0];
            item.push(oth);
            item = _.shuffle(item);
            item.unshift(palette[i].correct)
            item.unshift(palette[i].word)
            data.push(item);
        }
        return data;
    }

    //选择几个主颜色
    var chooseColors = function(num){
        var data =  _.shuffle(colors);
        return data.splice(0, num);
    }

    //选择双颜色主色
    var chooseDoubleColors = function(num){
        var data =  _.shuffle(doubleColors);
        return data.splice(0, num);
    }

    //选择主颜色以外的几个颜色
    var chooseOtherColor = function(color, num){
        var data =  _.shuffle(colors);

        if(typeof color === 'string'){
            var mainIndex = _.indexOf(data, color);
            data.splice(mainIndex, 1);
        }else{
            for(var i=0; i<color.length; i++){
                var mainIndex = _.indexOf(data, color[i]);
                data.splice(mainIndex, 1);
            }
        }
        return data.splice(0, num);
    }

    var chooseOtherDoubleColor = function(color, num){
        var data =  _.shuffle(doubleColors);
        var mainIndex = _.indexOf(data, color);
        data.splice(mainIndex, 1);
        return data.splice(0, num);
    }
});

//单色选择
(lib.singleColorBox = function(vertical){
    this.initialize();
    this.box1 = new lib.colorRect();
    this.box2 = new lib.colorRect();
    this.box3 = new lib.colorRect();

    if(vertical){
        this.box1.setTransform(0, 0);
        this.box2.setTransform(0, 150);
        this.box3.setTransform(0, 300);
    }else{
        this.box1.setTransform(0, 0);
        this.box2.setTransform(150, 0);
        this.box3.setTransform(300, 0);
    }

    this.mainColor = "#000000";
    this.onChoose = function(){};
    var isShowResult = false;
    var self = this;
    var cross = new lib.cross();
    cross.setTransform(0,0,1,1,0,0,0,-30,-25)

    this.changeColor = function(main, color1, color2, color3){
        this.box1.changeColor(color1);
        this.box2.changeColor(color2);
        this.box3.changeColor(color3);

        this.mainColor = main;
    }

    this.on("selectcolor", function(evt){
        if(isShowResult) return;
        isShowResult = true;

        var result = false;
        if(evt.color === this.mainColor) {
            result = true;
        }else{
            cross.x = evt.x;
            cross.y = evt.y;
            this.addChild(cross);
        }
        result ? createjs.Sound.play("bing") : createjs.Sound.play("ao")

        setTimeout(function(){
            isShowResult = false;
            self.removeChild(cross);
            self.onChoose(result);
        }, 1000)
    })

    this.clear = function(){
        this.removeChild(this.box1, this.box2, this.box3)
    }

    this.addChild(this.box1, this.box2, this.box3);

}).prototype = p = new createjs.Container();

//双色选择
(lib.doubleColorBox = function(){
    this.initialize();
    this.box1 = new lib.doubleColorRect();
    this.box2 = new lib.doubleColorRect();
    this.box3 = new lib.doubleColorRect();

    this.box1.setTransform(0, 0);
    this.box2.setTransform(150, 0);
    this.box3.setTransform(300, 0);

    this.mainColor = "#000000";
    this.onChoose = function(){};
    var isShowResult = false;
    var self = this;
    var cross = new lib.cross();
    cross.setTransform(0,0,1,1,0,0,0,-30,-25)

    this.changeColor = function(main, color1, color2, color3){
        this.box1.changeColor(color1);
        this.box2.changeColor(color2);
        this.box3.changeColor(color3);

        this.mainColor = main;
    }

    this.on("selectcolor", function(evt){
        if(isShowResult) return;
        isShowResult = true;

        var result = false;
        if(evt.color[0] === this.mainColor[0] && evt.color[1] === this.mainColor[1]) {
            result = true;
        }else{
            cross.x = evt.x;
            cross.y = evt.y;
            this.addChild(cross);
        }

        result ? createjs.Sound.play("bing") : createjs.Sound.play("ao")

        setTimeout(function(){
            isShowResult = false;
            self.removeChild(cross);
            self.onChoose(result);
        }, 1000)
    })

    this.clear = function(){
        this.removeChild(this.box1, this.box2, this.box3)
    }

    this.addChild(this.box1, this.box2, this.box3);

}).prototype = p = new createjs.Container();


(lib.progress = function(){

}).prototype = new lib.progressBar_10();