
function toPage2() {
    worktime = document.getElementById("worktime").innerHTML
    resttime = document.getElementById("resttime").innerHTML
    window.location.href = encodeURI("counttime.html?work=" + worktime + "&" + "rest=" + resttime);
}
new Vue({
    el: '#app',
    data() {
        return {
            select: { work: '1hour' },
            worktimes: [
                { work: '30minutes' }, { work: '1hour' }, { work: '2hours' }, { work: '3hours' }, { work: '4hours' }, { work: '5hours' }, { work: '24hours' }
            ],
            select2: { rest: '15minutes' },
            resttimes: [
                { rest: '1minute' }, { rest: '3minutes' }, { rest: '10minutes' }, { rest: '15minutes' }, { rest: '30minutes' }, { rest: '45minutes' }, { rest: '1hour' }, { rest: '2hour' }, { rest: '3hour' }, { rest: '5hour' }
            ],
            bottomNav: 3
        }
    },
    computed: {
        color() {
            switch (this.bottomNav) {
                case 0: return 'blue-grey'
                case 1: return 'teal'
                case 2: return 'grey'
                case 3: return '#29B6F6'
                case 4: return '#EEDD82'
            }
        }
    }
})