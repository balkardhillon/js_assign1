const myBal = process.argv
let myBal1 = []
myBal1.push(Number(myBal[2]))
myBal1.push(Number(myBal[3]))
console.log(myBal1)
const totalcost = (myBal1[3]*100)/myBal1[2]
const total=totalcost+Number(myBal1[2])
console.log(`Total Cost is :+ ${myBal1}`)