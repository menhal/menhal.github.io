var Queue = {
    remian : 0,
    run : function(callback, time){
        time = Number(time);
        setTimeout(function(){
            callback();
            Queue.remian -= time;
        }, this.remian)
        this.remian += time;
        return Queue;
    }
};

lib.Clock = function(limit){
    var self = new lib.clock();
    self.remain = limit;
    self.numText.text = limit;
    self.gotoAndStop(0);
    var sound ;
    //
    var countDown = function(){
        self.numText.text = self.remain;
        self.gotoAndStop(Math.floor((limit - self.remain) * 29 / limit));
        //sound = createjs.Sound.play("timer", {loop:-1});

        return setInterval(function(){
            self.remain --;
            self.numText.text = self.remain;
            self.gotoAndStop(Math.floor((limit - self.remain) * 29 / limit));
            if(self.remain === 0){
                self.dispatchEvent(new createjs.Event("timeup"))
                self.stopCount();
            }
        }, 1000)
    }

    var interval = 0;
    self.reset = function(){
        self.stopCount();
        self.remain = limit;
        interval = countDown();
    }

    self.startCount = function(){
        interval = countDown();
    }

    self.stopCount = function(){
        clearInterval(interval)
        sound && sound.stop();
    }

    self.on("removed", function(){
        self.stopCount();
    })
    self.startCount();
    return self;
};