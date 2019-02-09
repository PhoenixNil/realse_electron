var ipcRenderer = require('electron').ipcRenderer;
new Vue({
    el: '#app',
    data() {
        return {
            imgs: [
                {
                    src: '1.jpg'
                },
                {
                    src: '2.jpg'
                },
                {
                    src: '3.jpg'
                },
                {
                    src: '4.jpg'
                },
                {
                    src: '5.jpg'
                },
                {
                    src: '6.jpg'
                }

            ]
        }
    }
})
Vue.use(Vuetify, {
    iconfont: 'fa',
})
var thisURL = decodeURI(document.URL); // 获取当前页面的 url, 用decodeURI() 解码
time = thisURL.split('?')[1];
work = time.split('&')[0]
work = work.split('=')[1]
work = parseInt(work)
if (work < 30)
    work = work * 60
rest = parseInt(thisURL.split('&')[1].replace(/[^0-9]/ig, ""))
var m = work
var s = 0
var K = rest
var settime = setInterval(function () {
    showtime();
}, 1000);
function showtime() {
    document.getElementById('demo').innerHTML = m + "分" + s + "秒";
    if (s == 0 && m != 0) {
        m = m - 1;
        s = 59
    }
    else
        if (m != 0)
            s = s - 1;
    if (m == 0) {
    }

    if (m == 0 && s >= 0) {   //当时间为0分1秒时，暂停
        m = 0
        s = 0
        clearTimeout(t);
    }
}
// clearInterval(settime);

function stopCount() {
    m = 0
    s = 0
    clearTimeout(t);
    showtime();
}
function startCount() {
    m = work
    s = 0
    showtime()
}
function backSetURL() {
    ipcRenderer.send('BackSet');

}
document.getElementById('rest').innerHTML = "休息时间" + K + "分"