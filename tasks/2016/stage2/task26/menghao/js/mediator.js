/**
 * 传输介质Mediator
 * 添加监听者
 * 传输消息
 */
var Mediator = {

    listeners : [],

    //添加监听者
    addListener : function(listener){
        if(typeof listener !== 'function'){
            throw "listener must be a function";
        }
        return this.listeners.push(listener);
    },

    //删除监听者
    removeListener : function(listener){
        this.listeners.map(function(item){
            //if(listener === item) alert(1)
        })
    },

    //传输消息
    transmit : function(data){
        var self = this;
        setTimeout(function(){
            if(Math.random() < 0.3) {
                log("Mediator", "消息传输过程中丢失");
                return;
            }

            for(var i=0; i<self.listeners.length; i++){
                self.listeners[i](data);
            }
        }, 1000)
    }
}
