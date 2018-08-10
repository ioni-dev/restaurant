var images = ["<img src='restaurant/Media/main-photo.jpg' />",
              "<img src='Media/main-2.jpg'/>",
              "<img src='Media/main-3.jpg'/>",
              "<img src='Media/main-4.jpg'/>",
              "<img src='Media/main-5.jpg'/>",
              "<img src='Media/main-6.jpg'/>",
              "<img src='Media/main-7.jpg'/>",
              "<img src='Media/main-8.jpg'/>",
              "<img src='Media/main-9.jpg'/>"];

var i = 0;

function change(){
   
        document.querySelector(".intro-image").innerHTML = images[i];
        if(i < images.length -1){
            i++;
            
        }else{
            i=0;
        }
    setTimeout("change()", 2000);
       
    document.querySelector('img').className = 'animated fadeIn';
        
};

