$(document).ready(function(){
    let images = document.getElementsByClassName("image");
    let loaders = document.getElementsByClassName("loader");
    let i = 0;
    let thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            images[i].style.display = "block";
            loaders[i].style.display = "none";
            ++i;
            resolve("Success");
        }, 9000); 
    });

    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            images[i].style.display = "block";
            loaders[i].style.display = "none";
            ++i;
            resolve(thirdPromise);
        }, 6000);
    });

    let firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            images[i].style.display = "block";
            loaders[i].style.display = "none";
            ++i;
            resolve(secondPromise);
        }, 3000);
    });
    

    firstPromise.then().then().then(() => {
        console.log("Loaded Images Successfully");
    }).catch();

});