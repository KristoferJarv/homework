 /*
  Katlal on kolm temoperatuurivahemikku
  0-20 on liiga külm          -1
  21-40 on paras temperatuur   0 
  41-60 on liiga kuum          1 
  GitHubi: homework/checkTemp.js
*/

function checkTemp(temp) {
  console.log(temp);
  if (temp <= 20) {
  console.log("liiga külm")
  return -1;
  } else if (temp <= 40) {
  console.log("paras temperatuur")
  return 0;
  } else {
  console.log("liiga kuum")
  return 1;
    }
  }
