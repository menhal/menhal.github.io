/**
 * 转换xml为对象形式
 * @return {Object}
 * @param {XMLHttpRequest} elXML
 */
$.fn.toObject = function (){
    if (this==null) return null;
    var retObj = new Object;
    buildObjectNode(retObj,/*jQuery*/this.get(0));
    return $(retObj);
    function buildObjectNode(cycleOBJ,/*Element*/elNode){
        /*NamedNodeMap*/
        var nodeAttr=elNode.attributes;
        if(nodeAttr != null){
            if (nodeAttr.length&&cycleOBJ==null) cycleOBJ=new Object;
            for(var i=0;i<nodeAttr.length;i++){
                cycleOBJ[nodeAttr[i].name]=nodeAttr[i].value;
            }
        }
        var nodeText="text";
        if (elNode.text==null) nodeText="textContent";
        /*NodeList*/
        var nodeChilds=elNode.childNodes;
        if(nodeChilds!=null){
            if (nodeChilds.length&&cycleOBJ==null) cycleOBJ=new Object;
            for(var i=0;i<nodeChilds.length;i++){
                if (nodeChilds[i].tagName!=null){
                    if (nodeChilds[i].childNodes[0]!=null&&nodeChilds[i].childNodes.length<=1&&(nodeChilds[i].childNodes[0].nodeType==3||nodeChilds[i].childNodes[0].nodeType==4)){
                        if (cycleOBJ[nodeChilds[i].tagName]==null){
                            cycleOBJ[nodeChilds[i].tagName]=nodeChilds[i][nodeText];
                        }else{
                            if (typeof(cycleOBJ[nodeChilds[i].tagName])=="object"&&cycleOBJ[nodeChilds[i].tagName].length){
                                cycleOBJ[nodeChilds[i].tagName][cycleOBJ[nodeChilds[i].tagName].length]=nodeChilds[i][nodeText];
                            }else{
                                cycleOBJ[nodeChilds[i].tagName]=[cycleOBJ[nodeChilds[i].tagName]];
                                cycleOBJ[nodeChilds[i].tagName][1]=nodeChilds[i][nodeText];
                            }
                        }
                    }else{
                        if (nodeChilds[i].childNodes.length){
                            if (cycleOBJ[nodeChilds[i].tagName]==null){
                                cycleOBJ[nodeChilds[i].tagName]=new Object;
                                buildObjectNode(cycleOBJ[nodeChilds[i].tagName],nodeChilds[i]);
                            }else{
                                if (cycleOBJ[nodeChilds[i].tagName].length){
                                    cycleOBJ[nodeChilds[i].tagName][cycleOBJ[nodeChilds[i].tagName].length]=new Object;
                                    buildObjectNode(cycleOBJ[nodeChilds[i].tagName][cycleOBJ[nodeChilds[i].tagName].length-1],nodeChilds[i]);
                                }else{
                                    cycleOBJ[nodeChilds[i].tagName]=[cycleOBJ[nodeChilds[i].tagName]];
                                    cycleOBJ[nodeChilds[i].tagName][1]=new Object;
                                    buildObjectNode(cycleOBJ[nodeChilds[i].tagName][1],nodeChilds[i]);
                                }
                            }
                        }else{
                            cycleOBJ[nodeChilds[i].tagName]=nodeChilds[i][nodeText];
                        }
                    }
                }
            }
        }
    }
}

/**
 * @return {Element}
 * @param {String} _url
 */
$.loadXML = function (_url){
    var ret;
    $.ajax({
        type:"get",
        url:_url,
        async:false,
        dataType:"xml",
        success:function(xml){
            ret = xml;
        }
    });
    return ret.documentElement;
}