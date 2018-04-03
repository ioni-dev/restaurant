var images = ["<img src='main-photo.jpg' width= 100% height= 100%  />",
              "<img src='main-2.jpg' width= 100% height= 100%/>",
              "<img src='main-3.jpg' width= 100% height= 100%/>",
              "<img src='main-4.jpg' width= 100%  height= 100%/>",
              "<img src='main-5.jpg' width= 100%  height= 100%/>",
              "<img src='main-6.jpg' width= 100%  height= 100%/>",
              "<img src='main-7.jpg' width= 100%  height= 100%/>",
              "<img src='main-8.jpg' width= 100%  height= 100%/>",
              "<img src='main-9.jpg' width= 100%  height= 100%/>"];

var i = 0;

function change(){
   
        document.getElementById("image-proyector").innerHTML = images[i];
        if(i < images.length -1){
            i++;
        }else{
            i=0;
        }
    setTimeout("change()", 3000);
       
        
};

