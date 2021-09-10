/*
  Katlal on kolm temoperatuurivahemikku
  0-20 on liiga külm          -1
  21-40 on paras temperatuur   0 
  41-60 on liiga kuum          1 
  GitHubi: homework/checkTemp.js
*/
function checkTemp (temp) {
      console.log("temp on "+temp)
      if (temp < 0) {
          console.log("Liiga Külm")
          return -1;
      } else if (temp <=40) {
          return 0;
      } else {
          return 1;
       
      }

  }
