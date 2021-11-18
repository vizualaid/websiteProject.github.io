var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;


var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});


var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();


var example = ['Love', 'Fun', 'Ease'];
 var gFirstTime = true;
    textSequence(0);


function textSequence(i) {
if (gFirstTime) {
    timeToWait = 0;
    gFirstTime = false;
}
else {
    timeToWait = 3000;
}
if (example.length > i) {
    setTimeout(function () {
        var sequenceDiv = document.getElementById("sequence"); 
        sequenceDiv.style.color="#00abe9";
        sequenceDiv.style.animationDirection="alternate";                                                   
        sequenceDiv.innerHTML = example[i];                    
        textSequence(++i);
    }, timeToWait); 
} else if (example.length == i) { 
    textSequence(0);
}

}

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      
      const current = this.wordIndex % this.words.length;
     
      const fullTxt = this.words[current];
  
      if (this.isDeleting) {
        
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
     
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      let typeSpeed = 300;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
       
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        
        this.wordIndex++;
        
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  document.addEventListener("DOMContentLoaded", init);
  
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
   
    new TypeWriter(txtElement, words, wait);
  }
  
