(function (window) {
    "use strict"

    function Observer(data, parent) {
        let obj = objectWalk(data, parent)

        var watchList = [];
        obj.$watch = function (key, callback) {
            watchList.push({key:key, callback:callback})
        }

        obj.$dispatch = function (key, value) {
            for(let i in watchList){
                if(watchList[i].key === key) watchList[i].callback.call(obj, value)
            }
            eventBubble(obj, obj.$parent, key, value);
        }
        
        obj.$get = function (key) {
            let keys = key.split(".")
            let tmp = obj;

            for(let i in keys){
                tmp = tmp[keys[i]]
                if(!tmp) break;
            }
            return tmp
        }
        
        function eventBubble(obj, parent, key, value) {
            if(!parent) return;
            let track = getTrack(obj, parent);
            track.push(key);
            parent.$dispatch(track.join("."), value);
        }

        function getTrack(obj, parent){
            let track = [];
            while(obj.$parent && obj !== parent){
                for(let key in obj.$parent){
                    if(obj === obj.$parent[key]) track.push(key);
                }
                obj = obj.$parent;
            }
            return track;
        }

		return obj;
    }

    function objectWalk(data, parent) {
        let model = {};
        model.$parent = parent;

        for(let key in data){
            let val = data[key];

            Object.defineProperty(model, key, {
                enumerable : true, //为了可以遍历属性
                get : function () {
                    return val;
                },
                set : function (value) {
					if(value === val) return;
                    val = typeof value === 'object' ? new Observer(value, model) : value;
                    model.$dispatch(key, value)
                }
            });

            if(typeof val === 'object'){
                val = new Observer(val, model)
            }
        }
        return model;
    }
    
    function getTrack(parent, key) {
        return parent === "" ? key : parent+"."+key;
    }

    if(typeof module === 'object' && typeof exports !== "undefined"){
        module.exports = Observer
    } else {
        window.Observer = Observer
    }
}(window))