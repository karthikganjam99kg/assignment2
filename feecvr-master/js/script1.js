$(document).ready(function(){
  let image = document.getElementById("card1");
  let image1 = document.getElementById("card2");
  
  let loaders = document.getElementsByClassName("loader");
  let secondPromise = new Promise((resolve, reject) => {
    image1.style.display="none";
     
    setTimeout(() => {
        image1.style.display = "block";
        loaders[1].style.display = "none";
        
        resolve("Success");
    }, 6000);
});



  let firstPromise = new Promise((resolve, reject) => {
      image.style.display="none";
      setTimeout(() => {
          image.style.display = "block";
          loaders[0].style.display = "none";
          
          resolve(secondPromise);
      }, 3000);
  });
  

  firstPromise.then().then(() => {
      console.log("Loaded Images Successfully");
  }).catch();

});