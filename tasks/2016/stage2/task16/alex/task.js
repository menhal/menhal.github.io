/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var targetBtn = document.getElementById("add-btn");
var targetTable = document.getElementById("aqi-table");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    if(!('trim' in String.prototype)){
        String.prototype.trim = function(){
            return this.replace(/(^\s+)| (\s+$)/, "");
        }
    }
    var cityVal = document.getElementById("aqi-city-input").value;
    var formatCity = cityVal.trim();
    if(!formatCity.match(/^[a-zA-Z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！！！");
        return;
    }

    var numVal = document.getElementById("aqi-value-input").value;
    var formatNum = numVal.trim();
    if(!formatNum.match(/(^100$)|(^[1-9]\d$)|(^\d$)/)){
        alert("空气质量必须是100以内的数字！！！");
        return;
    }
    aqiData[cityVal] = numVal;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var renderHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        renderHTML += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>操作</button></td></tr>";
    }
    targetTable.innerHTML = renderHTML;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
    // do sth.
    var event =  e || window.event;
    if(event.target.nodeName.toLowerCase() == 'button'){
       delete  aqiData[event.target.dataset.city];
        renderAqiList();
    }

}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    //targetBtn.addEventListener('click', addBtnHandle, false);
    addEvent(targetBtn, 'click', addBtnHandle);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    //targetTable.addEventListener('click', delBtnHandle, false);
    addEvent(targetTable, 'click', delBtnHandle);
}

function addEvent(obj, type, fn){
    if(window.addEventListener){
        obj.addEventListener(type, fn, false);
    }else{
        obj.attachEvent('on'+ type, fn);
    }
}
init();