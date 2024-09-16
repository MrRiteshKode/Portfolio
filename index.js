"use strict";

window.onload = function exampleFunction(){
// function to be executed
const loader = document.querySelector(".loader");
const content = document.querySelector(".after-loader");
loader.style.display="none";
content.style.display="block";

}

AOS.init();

let questions = document.querySelectorAll(".first-q");
// let showElem = document.getElementById("show");
// showElem.style.maxHeight = showElem.scrollHeight + "px";
for (const question of questions) {
    question.addEventListener("click", (e) => {
        // alert(1)
        let arrow = e.currentTarget.children[0].children[1].children[0];
        let elem = e.currentTarget.children[1];
        if (arrow.classList.contains("fa-angle-up")) {
            arrow.classList.remove("fa-angle-up")
            arrow.classList.add("fa-angle-down")
        }
        else {
            arrow.classList.add("fa-angle-up")
            arrow.classList.remove("fa-angle-down")
        }
        if (elem.style.maxHeight) {
            elem.style.maxHeight = null;
        } else {
            elem.style.maxHeight = elem.scrollHeight + "px";
        }


    })
}

// typing text
const typingElement = document.getElementById("profession");
const text = "Web Developer";
const text2 = "Learner";
let chance = 1;

let index = 0;
let deleting = false;

function type() {
    if (deleting) {
        if (chance == 1) {
            typingElement.textContent = `${text.substring(0, index--)}|`;
            if (index < 0) {
                deleting = false;
                setTimeout(type, 500);
                chance = 2;
            } else {
                setTimeout(type, 50);
            }
        }

        else {
            typingElement.textContent = `${text2.substring(0, index--)}|`;
            if (index < 0) {
                deleting = false;
                setTimeout(type, 500);
                chance = 1;
            } else {
                setTimeout(type, 50);
            }
        }
    }

 else {
    if (chance == 1) {
        typingElement.textContent = `${text.substring(0, index++)}|`;
        if (index > text.length) {
            deleting = true;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 100);
        }
    }

    else{
        typingElement.textContent = `${text2.substring(0, index++)}|`;
        if (index > text2.length) {
            deleting = true;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 100);
        }
    }
}
}  
// Start the typing effect
type();

// hamburger

let ham = document.getElementById("ham");
let navList = document.querySelector(".nav-list");

ham.addEventListener("click", ()=>{
    navList.classList.toggle("show")
    if(!navList.classList.contains("show")){
        navList.style.display = "none";
        navList.style.visibility = "hidden";
        ham.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
    }
    else{
        navList.style.visibility = "visible";
        navList.style.display = "block";
        ham.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
    }
    
});

window.addEventListener('resize', function() {
    // Code to execute when the window is resized
    if(this.window.innerWidth>500){
        navList.style.visibility = "visible";
        navList.style.display = "block";
    }
    else{
        navList.style.display = "none";
        navList.style.visibility = "hidden";
        ham.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
    }
  });

//   scrool reach top event
const reachTop = document.querySelector(".reach-top");
window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        reachTop.style.display = "block";
      } else {
        reachTop.style.display = "none";
      }
}

reachTop.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
});
