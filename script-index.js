var images = ["<img src='media/main-photo.jpg' />",
              "<img src='media/main-2.jpg'/>",
              "<img src='media/main-3.jpg'/>",
              "<img src='media/main-4.jpg'/>",
              "<img src='media/main-5.jpg'/>",
              "<img src='media/main-6.jpg'/>",
              "<img src='media/main-7.jpg'/>",
              "<img src='media/main-8.jpg'/>",
              "<img src='media/main-9.jpg'/>"];

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

