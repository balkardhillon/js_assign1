const myVal = process.argv
let myBal1 = []
myBal1.push(Number(myVal[2]))
myBal1.push(Number(myVal[3]))
console.log(myBal1)
for(let i=0, add=0; i<=myBal1.length; add +=myBal1[i++])
{
  if(add>1000) {
      console.log('Sum is greater than 1000')
  }   
  else if(add<1000 && add>100)
  {
      console.log(`Sum is less than 1000 and greater than 100`)
  } else{
  
  console.log((`Sum is less than 100 and greater than10`))    
  
  }
}
