(function (global) {

    let vmList = [];
    const openTag = "{{";
    const closeTag = "}}";

    function Vue(config) {
        this.element = document.querySelector(config.el);
        this.data = new Observer(config.data);
        vmList.push(this);
    }
    
    Vue.scan = function (el, vm) {
        if(el.nodeType === 1){
            scanElementNode(el, vm)
        } else if(el.nodeType === 3) {
            scanTextNode(el, vm)
        }
    }
    
    function scanElementNode(node, vm) {
        for(let i=0; i<node.childNodes.length; i++){
            Vue.scan(node.childNodes[i], vm)
        }
    }

    function scanTextNode(node, vm) {
        let matchs = node.data.match(/{{.+?}}/g)
        if(!matchs) return;

        let text = node.data;

        matchs.forEach(function (match) {
            let binding = getBinding(match)
            vm.$watch(binding, function () {
                renderTextNode(node, text, matchs, vm)
            })
        })

        renderTextNode(node, text, matchs, vm)
    }

    function renderTextNode(node, text, bindings, vm) {
        node.data = text.replace(new RegExp(bindings.join("|"), "g"), function (word) {
            return vm.$get(getBinding(word))
        })
    }

    function getBinding(exp) {
        return exp.slice(closeTag.length, 0-closeTag.length)
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        vmList.forEach(function (item) {
            Vue.scan(item.element, item.data);
        })
    })

    if(typeof module !== "undefined" && typeof module.exports !== "undefined"){
        module.exports = Vue;
    } else {
        global.Vue = Vue;
    }
}(window))