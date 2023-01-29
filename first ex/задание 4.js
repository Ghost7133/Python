let fnum = 123
let snum = 234
let tnum = 345

average = Math.cbrt(fnum**2*snum**2*tnum).toFixed(4)
geometric = (Math.abs(fnum**3+snum**3+tnum)/3).toFixed(4)
console.log(average, geometric);