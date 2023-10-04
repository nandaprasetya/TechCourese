setTimeout(() => {
  $("#background-home3").removeClass("slide-out");
  $("#background-home1").removeClass("zoom-in");
  $("#background-home1").removeClass("slide-in");
  $("#background-home1").addClass("zoom-out");
  setTimeout(() => {
    $("#background-home1").removeClass("zoom-out");
    $("#background-home1").addClass("slide-out");
    $("#background-home2").removeClass("off-slide");
    $("#background-home2").addClass("slide-in");
  }, 500);
  setTimeout(() => {
    $("#background-home2").addClass("zoom-in");
    $("#background-home1").addClass("off-slide");
  }, 2000);
}, 7000);

setTimeout(() => {
  $("#background-home1").removeClass("slide-out");
  $("#background-home2").removeClass("zoom-in");
  $("#background-home2").removeClass("slide-in");
  $("#background-home2").addClass("zoom-out");
  setTimeout(() => {
    $("#background-home2").removeClass("zoom-out");
    $("#background-home2").addClass("slide-out");
    $("#background-home3").removeClass("off-slide");
    $("#background-home3").addClass("slide-in");
  }, 500);
  setTimeout(() => {
    $("#background-home3").addClass("zoom-in");
    $("#background-home2").addClass("off-slide");
  }, 2000);
}, 16000);

setTimeout(() => {
  $("#background-home2").removeClass("slide-out");
  $("#background-home3").removeClass("zoom-in");
  $("#background-home3").removeClass("slide-in");
  $("#background-home3").addClass("zoom-out");
  setTimeout(() => {
    $("#background-home3").removeClass("zoom-out");
    $("#background-home3").addClass("slide-out");
    $("#background-home1").removeClass("off-slide");
    $("#background-home1").addClass("slide-in");
  }, 500);
  setTimeout(() => {
    $("#background-home1").addClass("zoom-in");
    $("#background-home3").addClass("off-slide");
  }, 2000);
}, 25500);
setInterval(() => {
  setTimeout(() => {
  $("#background-home3").removeClass("slide-out");
  $("#background-home1").removeClass("zoom-in");
  $("#background-home1").removeClass("slide-in");
  $("#background-home1").addClass("zoom-out");
  setTimeout(() => {
    $("#background-home1").removeClass("zoom-out");
    $("#background-home1").addClass("slide-out");
    $("#background-home2").removeClass("off-slide");
    $("#background-home2").addClass("slide-in");
  }, 500);
  setTimeout(() => {
    $("#background-home2").addClass("zoom-in");
    $("#background-home1").addClass("off-slide");
  }, 2000);
}, 7000);

setTimeout(() => {
  $("#background-home1").removeClass("slide-out");
  $("#background-home2").removeClass("zoom-in");
  $("#background-home2").removeClass("slide-in");
  $("#background-home2").addClass("zoom-out");
  setTimeout(() => {
    $("#background-home2").removeClass("zoom-out");
    $("#background-home2").addClass("slide-out");
    $("#background-home3").removeClass("off-slide");
    $("#background-home3").addClass("slide-in");
  }, 500);
  setTimeout(() => {
    $("#background-home3").addClass("zoom-in");
    $("#background-home2").addClass("off-slide");
  }, 2000);
}, 16000);

setTimeout(() => {
  $("#background-home2").removeClass("slide-out");
  $("#background-home3").removeClass("zoom-in");
  $("#background-home3").removeClass("slide-in");
  $("#background-home3").addClass("zoom-out");
  setTimeout(() => {
    $("#background-home3").removeClass("zoom-out");
    $("#background-home3").addClass("slide-out");
    $("#background-home1").removeClass("off-slide");
    $("#background-home1").addClass("slide-in");
  }, 500);
  setTimeout(() => {
    $("#background-home1").addClass("zoom-in");
    $("#background-home3").addClass("off-slide");
  }, 2000);
}, 25500);
}, 28000);

let indexprogram = 0;
let imgprogram1 = ['img/front-end1.png','img/front-end2.png','img/front-end3.png']
let imgprogram2 = ['img/editing-video1.png','img/editing-video2.png','img/editing-video3.png']
let imgprogram3 = ['img/backend1.png','img/backend2.png','img/backend3.png']

setInterval(() => {
  if(indexprogram == 1){
    $("#pil-program-1").addClass("active");
    $("#pil-program-2").removeClass("active");
    $("#pil-program-3").removeClass("active");
  } else if(indexprogram == 2){
    $("#pil-program-2").addClass("active");
    $("#pil-program-1").removeClass("active");
    $("#pil-program-3").removeClass("active");
  }else if(indexprogram == 3){
    $("#pil-program-3").addClass("active");
    $("#pil-program-2").removeClass("active");
    $("#pil-program-1").removeClass("active");
  }
}, 300);

setTimeout(() => {
  $("#img-program1").addClass("active1");
  $("#img-program2").addClass("active");
  $("#img-program3").addClass("active2");
  setTimeout(() => {
  $("#img-program1").attr("src", imgprogram2[0]);
  $("#img-program2").attr("src", imgprogram2[1]);
  $("#img-program3").attr("src", imgprogram2[2]);
  $("#img-program1").removeClass("active1");
  $("#img-program2").removeClass("active");
  $("#img-program3").removeClass("active2");
  }, 2000);
  indexprogram = 2;
}, 7000);

setTimeout(() => {
  $("#img-program1").addClass("active1");
  $("#img-program2").addClass("active");
  $("#img-program3").addClass("active2");
  setTimeout(() => {
  $("#img-program1").attr("src", imgprogram3[0]);
  $("#img-program2").attr("src", imgprogram3[1]);
  $("#img-program3").attr("src", imgprogram3[2]);
  $("#img-program1").removeClass("active1");
  $("#img-program2").removeClass("active");
  $("#img-program3").removeClass("active2");
  }, 2000);
  indexprogram = 3;
}, 14000);

setTimeout(() => {
  $("#img-program1").addClass("active1");
  $("#img-program2").addClass("active");
  $("#img-program3").addClass("active2");
  setTimeout(() => {
  $("#img-program1").attr("src", imgprogram1[0]);
  $("#img-program2").attr("src", imgprogram1[1]);
  $("#img-program3").attr("src", imgprogram1[2]);
  $("#img-program1").removeClass("active1");
  $("#img-program2").removeClass("active");
  $("#img-program3").removeClass("active2");
  }, 2000);
  indexprogram = 1;
}, 21000);

setInterval(() => {
  setTimeout(() => {
    $("#img-program1").addClass("active1");
    $("#img-program2").addClass("active");
    $("#img-program3").addClass("active2");
    setTimeout(() => {
    $("#img-program1").attr("src", imgprogram2[0]);
    $("#img-program2").attr("src", imgprogram2[1]);
    $("#img-program3").attr("src", imgprogram2[2]);
    $("#img-program1").removeClass("active1");
    $("#img-program2").removeClass("active");
    $("#img-program3").removeClass("active2");
    }, 2000);
    indexprogram = 2;
  }, 7000);
  
  setTimeout(() => {
    $("#img-program1").addClass("active1");
    $("#img-program2").addClass("active");
    $("#img-program3").addClass("active2");
    setTimeout(() => {
    $("#img-program1").attr("src", imgprogram3[0]);
    $("#img-program2").attr("src", imgprogram3[1]);
    $("#img-program3").attr("src", imgprogram3[2]);
    $("#img-program1").removeClass("active1");
    $("#img-program2").removeClass("active");
    $("#img-program3").removeClass("active2");
    }, 2000);
    indexprogram = 3;
  }, 14000);
  
  setTimeout(() => {
    $("#img-program1").addClass("active1");
    $("#img-program2").addClass("active");
    $("#img-program3").addClass("active2");
    setTimeout(() => {
    $("#img-program1").attr("src", imgprogram1[0]);
    $("#img-program2").attr("src", imgprogram1[1]);
    $("#img-program3").attr("src", imgprogram1[2]);
    $("#img-program1").removeClass("active1");
    $("#img-program2").removeClass("active");
    $("#img-program3").removeClass("active2");
    }, 2000);
    indexprogram = 1;
  }, 21000);
}, 28000);

gsap.registerPlugin(ScrollTrigger);
        let cursor = $("#cursor");
        let wind = window.innerWidth;
        
        function movecursor(e) {
          let widthcursor = $("#cursor").width()/2;
            wind = window.innerWidth;

            if(e.clientX > wind / 2){
                gsap.to(cursor, {
                duration: 0.3,
                delay:0.1,
                x: e.clientX - widthcursor,
                y: e.clientY -  widthcursor,
                ease: "back.out(2)"
            })
            }else{
                gsap.to(cursor, {
                duration: 0.3,
                delay:0.1,
                x: e.clientX - widthcursor,
                y: e.clientY -  widthcursor,
                ease: "back.out(2)"
            })
            }
        }

        $(window).on('mousemove', movecursor);
        $(window).resize(movecursor);

      