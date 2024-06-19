// var cnt=0;
// setInterval(()=>{
//     cnt+=1;
//     console.log(cnt);
// }, 1000);

//without setInterval function

var cnt2 = 0;
function counter() {
  cnt2 += 1;
  console.clear();
  console.log(cnt2);
}

for (var i = 0; i < 100; i++) {
  setTimeout(counter, (i + 1) * 1000);
}
