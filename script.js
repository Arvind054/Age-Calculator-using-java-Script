function ClaculateAge(){
    let DOB = document.querySelector(".date");
    let date2 = DOB.value.split("-");
    let y1 = date2[0];
    let m1 = date2[1];
    let d1 = date2[2];
    let date1 = new Date;
    let y2 = date1.getFullYear();
    let d2 = date1.getUTCDate();
    let m2 = date1.getMonth()+1;
    let y3,m3,d3;
    y3 = y2-y1;
    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        m3 = 12+ m2-m1;
        y3--;
    }
    
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        const monthdays = new Date(y1,m1,0).getDate();
        d3 = monthdays + d2-d1;
        m3--;
    }
    if(m3<0){
        m3=1;
        y3--;
    }
  const result = document.querySelector(".result");
   result.innerHTML = `🎂 You Age is  ${y3} years, ${m3} months, ${d3} Days.`
}

let button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    ClaculateAge();
    
});