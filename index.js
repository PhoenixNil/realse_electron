var ipcRenderer = require('electron').ipcRenderer;
var randombgs = [];
randombgs[0] = "bg1.jpg"
randombgs[1] = "bg2.jpg"
randombgs[2] = "bg3.jpg"
randombgs[3] = "bg5.jpg"
randombgs[4] = "bg6.jpg"
randombgs[5] = "bg7.jpg"
var randomBgIndex = Math.round(Math.random() * 5);
document.write('<style>body{background-image:url(' + randombgs[randomBgIndex] + ')}</style>');
//关闭窗口
document.getElementById('closebt').addEventListener('click', () => {
    ipcRenderer.send('window-all-closed');
});
//最小化
document.getElementById('minbt').addEventListener('click', () => {
    ipcRenderer.send('hide-window');
});
//向主进程发送
document.getElementById('mainbt').addEventListener('click', () => {
    ipcRenderer.send('two-show');
});