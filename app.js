let hrs = document.querySelector('#hrs')
let mnt = document.querySelector('#mnt')
let scn =document.querySelector('#scn')


setInterval(() => {
let currentTime = new Date()

hrs.innerHTML=(currentTime.getHours()<10?"0":'')+currentTime.getHours()
mnt.innerHTML=(currentTime.getMinutes()<10?"0":'')+currentTime.getMinutes()
scn.innerHTML=(currentTime.getSeconds()<10?"0":'')+currentTime.getSeconds()
}, 1000);

