async function load1() {
    document.getElementById("card1").style.display="none";
    document.getElementByClass("loader").style.display="block";
    
    
    setTimeout(function(){
        document.getElementById("card1").style.display="block";
         document.getElementByClass("loader").style.display="none";
         }, 2000);
  }
 function load2() {
    document.getElementById("card2").style.display="none";
    document.getElementByClass("loader").style.display="block";
    setTimeout(function(){
        document.getElementByClass("loader").style.display="none";
         document.getElementById("card2").style.display="block";
         }, 1000);
  }

  

window.onload=function(){load1().then(load2());};