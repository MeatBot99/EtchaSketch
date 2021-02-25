
/*TODO: create UI elements that allow control for grid size
        create UI elements that allow color control/erasing/random colors
  Optional: have a preview html canvas displaying the overall picture
            institute a save feature where you can download a svg  or png file
            of the html canvas item.

  Looks like simple adding and removing of classes that will have a mouseenter event that will
  change the classlist. Put some logit in here because this project needs to move.
  Triggers on "input" at the moment. Seems to work.
  Keyboard shortcuts would make this app easier to use and would be a good exercise in key bindings.

  Twitch Icon: sizes 28x28, 56x56, and 112x112 pixels
               png format
              transparent background
              25kb sizes
              no copyrights
*/

let sliderValue= document.getElementById("slider-value");
    slider = document.getElementById("input-number");
    drawBlack = document.getElementById("draw-black");
    erase = document.getElementById("erase");
    drawColor = document.getElementById("draw-color");
    drawRandom = document.getElementById("draw-random");
    changedColor = document.getElementsByClassName("squares")
    divExperiment = document.getElementById("divExperiment");

//drawBlack.checked = true;

sliderValue.innerText= slider.value;

const createGrid = function(sWidth){
  removeGrid();

  let m = sWidth;
  /*let slider=  document.getElementById("input-number");*/
  slider.value = m;

/*Variable and iterator names based on an earlier build. They don't make sense but they work*/
  for (let p=0; p<m; p++){
    let scall = document.createElement("div");
    scall.classList.add("lines");
      for (let q=0;q<m;q++){
        let srowe = document.createElement("div");
        srowe.classList.add("squares");
        scall.appendChild(srowe);
      };
    divExperiment.appendChild(scall);
  };



/*This little block of code sets each indivdual square's height to its width dynamically.*/
  let baseSquare = document.querySelector(".squares");
  let compStyle = window.getComputedStyle(baseSquare);
  let compWidth = compStyle.getPropertyValue('width');
  let dimension = document.documentElement;
  dimension.setAttribute("style", `--dimension: ${compWidth}`);

  return sWidth
};

const paint = function(){
  let thisColor = this.dataset.mode;
  for(let square of changedColor){
    let paintColor = ()=> square.classList.add(thisColor);
    square.addEventListener("mouseenter", paintColor);
  };

  if(this.checked===false){
    for(let square of changedColor){
    let removePaint = ()=>square.classList.remove(thisColor);
    square.addEventListener("mouseenter", removePaint);  
    };
  };
};

const removeGrid = function(){
  let targetDivs = document.getElementsByClassName("lines");
  let divArray = Array.from(targetDivs);
  divArray.forEach(div=>div.remove());
};



const returnValue = function(){
  /*let sliderValue= document.getElementById("slider-value");*/
  let number = this.value;
  sliderValue.innerText = number;
  createGrid(number);
}

slider.oninput = returnValue;

drawBlack.addEventListener("input", paint);
erase.addEventListener("input", paint);
drawColor.addEventListener("input", paint);
drawRandom.addEventListener("input", paint);


window.onload = createGrid(16);
//paint();
