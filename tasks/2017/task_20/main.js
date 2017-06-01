(function (window) {
    "use strict"

    function Observer(data) {
        var obj = {};
        objectWalk.call(obj, obj, data)

        var watchList = [];
        obj.$watch = function (key, callback) {
            watchList.push({key:key, callback:callback})
        }

        obj.$dispatch = function (key, value) {
            for(let i in watchList){
                if(watchList[i].key === key) watchList[i].callback.call(obj, value)
            }
        }

		return obj;
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
					if(value === val) return;
                    self.$dispatch(key, value)
                    val = value
                    objectWalk.call(self, {}, value)
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