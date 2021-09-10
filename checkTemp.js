 /*
  Katlal on kolm temoperatuurivahemikku
  0-20 on liiga külm          -1
  21-40 on paras temperatuur   0 
  41-60 on liiga kuum          1 
  GitHubi: homework/checkTemp.js
*/
function checkTemp (temp) {
    console.log("temp on "+temp)
    if (temp < 20) {
        console.log("Liiga Külm")
        return -1;
    } else if (temp <=40) {
      console.log("paras temperatuur")
        return 0;

    } else {
      console.log("liiga kuum")
        return 1;
     
    }

}


let tulemus = checkTemp(5)

checkTemp(5)
checkTemp(15)
checkTemp(30)
checkTemp(45)
checkTemp(55)


function checkTemp() {
let Temp = 5;
temp = Math.random()*60 
}


function summa(a,b ) {
    return a+b
}
let Vastus = summa(2,7)

function kasKütta(temp) {
return temp < 20
}

function kasJahutada(temp) {
  returntemp > 40
}

let kasJahutada = true;