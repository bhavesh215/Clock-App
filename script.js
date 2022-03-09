// setInterval ka use tab krwaya jata hai jb hame koi kaam repeadly  krana hota after a particular time interval like jaise clock me time hota 
setInterval(()=>{
    d = new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation= 30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000)