var Queue = function(){
    var remian = 0;
    var data = [];
    this.add = function(callback, time){
        time = Number(time);
        data.push({callback:callback, time:time});
    }

    this.run = function(callback){
        for(var i=0; i<data.length; i++){
            (function(){
                var item = data[i];
                setTimeout(function(){
                    item.callback();
                    remian -= item.time;
                }, remian)
            })()

            remian += data[i].time;
        }
    }
}

lib.Clock = function(limit){
    var self = new lib.clock();
    self.remain = limit;
    self.numText.text = limit;
    self.gotoAndStop(0);
    //
    var countDown = function(){
        self.numText.text = self.remain;
        self.gotoAndStop(Math.floor((limit - self.remain) * 29 / limit));

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
    }

    self.on("removed", function(){
        self.stopCount();
    })
    self.startCount();
    return self;
};

(lib.soundlist = function(soundlist){
    var que = new Queue();
    for(var i=0; i<soundlist.length; i++){
        (function(){
            var sound = createjs.Sound.createInstance(soundlist[i]);
            que.add(function(){
                sound.play();
            }, sound._duration)
        })();
    }

    this.play = function(){
        que.run();
    }
})