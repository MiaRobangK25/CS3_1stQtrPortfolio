// define var 
let passengers = 0
let planes =0
let planereq = 0

// get input 
rl = require('readline')
rli = rl.createInterface({input: process.stdin})
rli.on('line', get_passenger_and_planes)

function get_passenger_and_planes(line){
  [planes, passengers] = line.trim().split(' ')
  console.log(planes, passengers)
  planef(planes,passengers)
}
function planef(planes, passengers){
  passengers  = roundup100(passengers)
  console.log(passengers)
  planereq = (passengers - (planes * 100)) / 100
  
  if (planereq < 0 ) console.log(0)
  else console.log(planereq)
}
function roundup100(passengers){
  return (Math.ceil(passengers/100) * 100)
}