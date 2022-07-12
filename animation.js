
    const typewrite = document.querySelector("#typewriting");
    const ul = document.querySelector("#ul");
    const h1Div = document.querySelector("#h1Div");
    const para1 = document.querySelector("#p1");
    const para2 = document.querySelector("#p2");
    const para3 = document.querySelector("#p3");
    const para4 = document.querySelector("#p4");
    const para5 = document.querySelector("#p5");
    const para6 = document.querySelector("#p6");
    const para7 = document.querySelector("#p7");
    const main = document.querySelector("#main");
    const div = document.querySelector("#div");
    const hearbeat = document.querySelector("#video");
    const piano = document.querySelector("#piano");
    const span = document.querySelector("#span");
   

    document.addEventListener("click", function(){
    setTimeout(function(){
        para1.style.display = "block";
        h1Div.style.display = "none";
        ul.style.display = "none";

        
    }, 10);
});


    document.addEventListener("click", function(){
    setTimeout(function(){
        para2.style.display = "block";
        para1.innerHTML = "";
    }, 6500);
});


    document.addEventListener("click", function(){
    setTimeout(function(){
        para2.innerHTML = "";
        div.style.display = "block";
        document.body.style.backgroundColor = "white"
        document.body.style.transition = "5s";
    }, 16000);
});

document.addEventListener("click", function(){
    setTimeout(function(){
        
        document.body.style.backgroundColor = "rgb(48, 46, 46)"; 
        document.body.style.transition = "4s";
    }, 19000);
});



    function func2(){  
        setTimeout(function(){typewrite.play(); }, 45);
        setTimeout(function(){typewrite.play(); }, 6500);
        setTimeout(function(){hearbeat.play(); }, 14800);
        setTimeout(function(){piano.play(); }, 24000);
        setTimeout(function(){typewrite.play(); }, 27800);
        setTimeout(function(){typewrite.play(); }, 34900);
        setTimeout(function(){typewrite.play(); }, 43000);
    } 

   document.onclick= func2;



   const section = document.querySelector("#section");
   const image = document.querySelector("#image");

   const images = [
       "./images/img1.jpg","./images/img3.jpg",
       "./images/img4.jpg","./images/img5.jpg",
       "./images/img6.jpg","./images/img7.jpg",
       "./images/img8.jpg","./images/img9.jpeg",
       "./images/img10.jpg","./images/img11.jpg",
       "./images/img12.jpg","./images/img13.jpg",
       "./images/img14.jpg","./images/img15.jpg",
       "./images/img16.jpg","./images/img17.jpg",
       "./images/img18.jpg","./images/img19.jpg",
       "./images/img20.jpg"
   ];

   let roller = 1;
   function byttBilde() {
    div.innerHTML = ""; 
    section.style.display = "block";

    const Newimg = images[roller];
    image.src = Newimg;

    roller++;
    if(roller >= images.length) {
        section.style.display = "none";
        para3.style.display = "block";
    }
}

    image.addEventListener("animationiteration", byttBilde);

    
    document.addEventListener("click", function(){
        setTimeout(function(){
            byttBilde();
    
        }, 21000);
});
    
    
    document.addEventListener("click", function(){
    setTimeout(function(){
        para4.style.display = "block";
        para3.innerHTML = "";
    }, 34000);
});


    document.addEventListener("click", function(){
    setTimeout(function(){
        para5.style.display = "block";
        para4.innerHTML = "";
    }, 42000);
});
    
 
    document.addEventListener("click", function(){
    setTimeout(function(){
        para6.style.display = "block";
        para5.innerHTML = "";
    }, 50000);
});


    document.addEventListener("click", function(){
        setTimeout(function(){
            para6.innerHTML = "";
            para7.style.display = "block";
        }, 53500);
    });