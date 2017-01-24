const Val = process.argv;
let bal1 = [Number(Val[2])];
console.log("Third Value from process.argv : " + bal1);
bal1.push(Number(Val[3]));
let a = Number(Val[2]);
let b = Number(Val[3]);
let c =a+ b;
console.log("Addition of 3rd and 4th argument : " + c);
