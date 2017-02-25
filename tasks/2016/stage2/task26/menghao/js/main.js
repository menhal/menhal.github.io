//因为不知道创建飞船命令的接受者是谁， 所以就安排给看不见的上帝了
Mediator.addListener(function(cmd){
    if(cmd.receiver !== 'God') return;
    if(cmd.message === 'createSpaceShip')
        new SpaceShip(cmd.options);
});

window.onload = function(){
    var num = 1;
    document.getElementById("create").addEventListener("click", function(){
        Commander.launchSpaceShip(num++);
    })
}
