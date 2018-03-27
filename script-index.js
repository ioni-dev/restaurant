var images = ["<img src='main-photo.jpg' width= 100% height= 100%  />",
              "<img src='wine-photo.jpg' width= 100% height= 100%/>",
              "<img src='table-photo.jpg' width= 100% height= 100%/>",
              "<img src='iphone-lady.jpg' width= 100%  height= 100%/>"];



function change(){
    
    var random = images[Math.floor(images.length * Math.random())];
        document.getElementById("image-proyector").innerHTML = random;
        

       
        
};

function reloj (){
     setInterval(change, 3000);
};
