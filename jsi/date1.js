let v1 = "A";
let v2 = "B";
let result = v1 == "A" && v1 == "C" // false
let result2 = v1 == "C" || v2 == "C" // false
let result3 = v1 == "C" || v2 == "B" // true
let result4 = !v1 == "A" // false
console.log(result4)

for (let i = 0; i < 5; i++) {
    console.log(i)
  }

let i = 0;
while (i < 10) {
  console.log("The number is " + i);
  i++;
}
  