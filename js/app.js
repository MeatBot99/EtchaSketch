
/*TODO: [x]create UI elements that allow control for grid size
        [x]create UI elements that allow color control/erasing/random colors
  Optional: have a preview html canvas displaying the overall picture
            institute a save feature where you can download a svg  or png file of the
            html canvas item.
            Keyboard shortcuts would make this app easier to use and would be a good
            exercise in key bindings.

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
    colorPicker = document.getElementById("color-picker");

const choseColor = ()=>{
  let paintColor = document.documentElement;
      compColor = colorPicker.value;
  paintColor.style.setProperty(`--this-color`, `${compColor}`);
};

const qualityFunction = ()=> drawColor.click();

colorPicker.onchange = qualityFunction;

const createGrid = function(sWidth){
  choseColor();
  removeGrid();
  let m = sWidth;
  slider.value = m;

/*Variable and iterator names based on an earlier build. They don't make sense but they work*/
  for (let p=0; p<m; p++){
    let scall = document.createElement("div");
    scall.classList.add("lines");
      for (let q=0; q<m; q++){
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
  dimension.style.setProperty(`--dimension`, `${compWidth}`);
};

/*The paint function assigns background color to a specific color or the current random/chosen
color instead of assigning classes.*/
const paint = function(){
  choseColor();
  const randColor = ()=> `#`+ Math.floor(Math.random()*16777215).toString(16);;
  const pigmentize = function(square){
    randColor();
    if(drawColor.checked===true){
      this.style.setProperty(`background-color`, `${colorPicker.value}`);
    }else if(drawBlack.checked===true){
      this.style.setProperty(`background-color`, `black`);
    }else if(erase.checked===true){
      this.style.setProperty(`background-color`, `transparent`);
    } else if (drawRandom.checked===true){
      this.style.setProperty(`background-color`, randColor())
    }
  };
  for(let square of changedColor){
    square.onmouseenter = pigmentize;
  };
};

const removeGrid = function(){
  let targetDivs = document.getElementsByClassName("lines");
  let divArray = Array.from(targetDivs);
  divArray.forEach(div=>div.remove());
};

const returnValue = function(){
  let number = this.value;
  sliderValue.innerText = number;
  init(number);
};

slider.oninput = returnValue;

drawBlack.addEventListener("input", paint);
erase.addEventListener("input", paint);
drawColor.addEventListener("input", paint);
drawRandom.addEventListener("input", paint);
colorPicker.addEventListener("change", choseColor);

const init = function(num){
  createGrid(num);
  sliderValue.innerText= slider.value;
  drawBlack.checked=false;
  erase.checked=false;
  drawColor.checked=false;
  drawRandom.checked=false;
};

window.onload = init(16);
