function time() {
    let hrs = document.getElementById("three2s");
    let mins = document.getElementById("three3s");
    let secs = document.getElementById("three4s");
    let ampm = document.getElementById("am");

    let times = new Date();

    let hour = times.getHours();
    let minut = times.getMinutes();
    let second = times.getSeconds();
    let ampm1 = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm1 = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minut < 10) {
        minut = "0" + minut;
    }
    if (second < 10) {
        second = "0" + second;
    }

    hrs.innerText = hour;
    mins.innerText = minut;
    secs.innerText = second;
    ampm.innerText = ampm1;
}
let milisecond = 1000;
setInterval(time, milisecond);

function ChangeDirection(){
    
    var w =document.getElementById("one").value;
    var x =document.getElementById("two").value;
    var y =document.getElementById("three").value;
    var z =document.getElementById("four").value;
    
    let tym = new Date().getHours();


    if(w == tym){
        let img =  document.getElementById("component");
        img.src = "./Capture";
        document.getElementById("gudmorning").innerHTML = ("Good Morning");
        document.getElementById("greet").innerHTML = ("GRAB SOME HEALTHY BREAKFAST!!!");
    }
    else if(x == tym){
        let img =  document.getElementById("component");
        img.src = "./Capture1.JPG";
        document.getElementById("gudmorning").innerText = ("Good AFternoon !! Time for lunch");
        document.getElementById("greet").innerHTML = ("HAVE SOME HEALTHY LUNCH !!");
    }
    else if(y == tym){
        let img =  document.getElementById("component");
        img.src = "./Capture2.JPG";
        document.getElementById("gudmorning").innerHTML = ("Good Evening !!");
        document.getElementById("greet").innerText = ("STOP YAWNING AND GRAB TEA !!");
    }
    else if(z == tym){
        let img =  document.getElementById("component");
        img.src = "./Capture3.JPG";
        document.getElementById("gudmorning").innerHTML = ("Night Night !!");
        document.getElementById("greet").innerHTML = ("CLOSE YOUR EYE'S AND GO TO SLEEP !!");
    }
    
    
    let ones =document.getElementById("WakeT");
    ones.innerText = one.options[one.selectedIndex].text;

    let twos =document.getElementById("LunchT");
    twos.innerText = two.options[two.selectedIndex].text;
    
    let threes = document.getElementById('NapT');
    threes.innerText = three.options[three.selectedIndex].text;

    let fours = document.getElementById("NightT");
    fours.innerText = four.options[four.selectedIndex].text;

}