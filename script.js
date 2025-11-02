let days = ["SUN","MON","TUES","WED","THRUS","FRI","SAT"]
let months = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"]



let hours = document.getElementById("hrs")
let minutes = document.getElementById("mins")
let date = document.getElementById("date")
let year = document.getElementById("years")
let day = document.getElementById("day")
let ampm = document.getElementById("ampm")
let second = document.getElementById("sec")
let month = document.getElementById("months")


setInterval(() => {
let cloc = new Date
hours.innerHTML = (cloc.getHours() <10?"0":"") + cloc.getHours()
minutes.innerHTML = (cloc.getMinutes() <10?"0":"") + cloc.getMinutes()
date.innerHTML = cloc.getDate()
year.innerHTML = cloc.getFullYear()
day.innerHTML = days[cloc.getDay()]
second.innerHTML = (cloc.getSeconds() <10?"0":"") + cloc.getSeconds()
ampm.innerHTML = cloc.getHours >=12? "AM":"PM"
month.innerHTML = months[cloc.getMonth()]

},1000)