(function (window) {
    "use strict"

    function Observer(data) {
        this.data = {};
        for(var key in data){
            let val = data[key];
            Object.defineProperty(this.data, key, {
                get : function () {
                    console.log("你访问了 "+key)
                    return val;
                },
                set : function (value) {
                    console.log('你设置了 '+key+'，新的值为'+value)
                    val = value
                }
            });
        }
    }

    if(typeof module === 'object' && typeof exports !== "undefined"){
        module.exports = Observer
    } else {
        window.Observer = Observer
    }
}(window))