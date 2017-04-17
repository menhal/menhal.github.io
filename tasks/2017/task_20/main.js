(function (window) {
    "use strict"

    function Observer(data) {
        this.data = {};
        objectWalk.call(this, this.data, data)

        var watchList = [];
        this.$watch = function (key, callback) {
            watchList.push({key:key, callback:callback})
        }

        this.$dispatch = function (key, value) {
            for(let i in watchList){
                if(watchList[i].key === key) watchList[i].callback.call(this, value)
            }
        }
    }

    function objectWalk(model, data) {
        var self = this;
        for(let key in data){
            let val = data[key];

            Object.defineProperty(model, key, {
                get : function () {
                    return val;
                },
                set : function (value) {
                    self.$dispatch(key, value)
                    if(typeof value === 'object'){
                        val = objectWalk.call(self, {}, value)
                    } else {
                        val = value
                    }
                }
            });
        }
        return model;
    }

    if(typeof module === 'object' && typeof exports !== "undefined"){
        module.exports = Observer
    } else {
        window.Observer = Observer
    }
}(window))