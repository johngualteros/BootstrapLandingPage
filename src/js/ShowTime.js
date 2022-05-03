function startTime(){
    today=new Date();
    hour=today.getHours();
    minutes=today.getMinutes();
    second=today.getSeconds();
    minutes=checkTime(minutes);
    second=checkTime(second);
    document.getElementById('reloj').innerHTML=hour+":"+minutes+":"+second;
    t=setTimeout('startTime()',500);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();
}