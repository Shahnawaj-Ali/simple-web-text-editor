

 function btn1(){
 	var c=document.getElementById("text_area").value; 	
    var b=document.getElementById("Div_area");
        b.innerHTML=c;

    var s=document.getElementById("d1");
        s.style.display="none";
    var n=document.getElementById("d2");
        n.style.display="block";
        n.style.display="flex";
        n.style.justifyContent="space-around";

    var d=document.getElementById("btn1");    
         d.style.display="none";

    var w=document.getElementById("btn2");  
        w.style.display="block";
        return false;
 }

 function btn2(){
 	var w=document.getElementById("btn2");
 	    w.style.display="none";

 	var d=document.getElementById("btn1");    
        d.style.display="block";

    var s=document.getElementById("d1");
        s.style.display="block";
        s.style.display="flex";
        s.style.justifyContent="space-around";
    var n=document.getElementById("d2");
        n.style.display="none";    
 	    return false;
 }

