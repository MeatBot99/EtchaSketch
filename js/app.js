
/*TODO: create UI elements that allow control for grid size
        create UI elements that allow color control/erasing/random colors
  Optional: have a preview html canvas displaying the overall picture
            institute a save feature where you can download a svg  or png file
            of the html canvas item.

  Twitch Icon: sizes 28x28, 56x56, and 112x112 pixels
               png format
              transparent background
              25kb sizes
              no copyrights
*/
const createGrid = function(sWidth){
  removeGrid();
  let slider=  document.getElementById("input-number");
  slider.value = sWidth;
  let divExperiment = document.getElementById("divExperiment");
  let m = sWidth;

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

  let baseSquare = document.querySelector(".squares");
  let compStyle = window.getComputedStyle(baseSquare);
  let compWidth = compStyle.getPropertyValue('width');
  let dimension = document.documentElement;

  dimension.setAttribute("style", `--dimension: ${compWidth}`);
  return sWidth
};


const removeGrid = function(){
  let targetDivs = document.getElementsByClassName("lines");
  let divArray = Array.from(targetDivs)
  divArray.forEach(div=>div.remove())
};

let sliderValue= document.getElementById("slider-value");
sliderValue.innerText= createGrid(16);

try {
  createGrid(16);
}
catch (e){
  console.table(e);
}

const returnValue = function(){
  let sliderValue= document.getElementById("slider-value");
  let number = this.value;
  sliderValue.innerText = number;
  createGrid(number);
  console.log(number)
}

let slider = document.getElementById("input-number");
slider.oninput = returnValue

let response = function(){
  console.log("A change Has Occured")
}

let drawBlack = document.getElementById("draw-black");
drawBlack.addEventListener("input", response)


  /*while(drawBlack.checked===true){
    console.log("cat")
  }*/

/*if(drawBlack.checked===true){
  let squares = document.querySelectorAll(".squares");
  try {
    forEach((square, squares) => {
      square.classList.add("paint-black")
    });
    squares.classList.add("paint-black")
}
  catch(e){console.table(e)}
  console.log(squares)
}*/



///////////////////////////////////////////////////////////////////////////////////////////

/*I am keeping these older versions as a reference for now. */

const roughDraftGrid = function(){
  let experiment = document.getElementById("experiment");
  let n = 25;

  for (let i=0; i<n; i++){
    let call = document.createElement("ul")
     for (let j=0;j<n;j++){
       let rowe = document.createElement("li");
       rowe.innerText = i;
       call.appendChild(rowe);
     };
    experiment.appendChild(call);
  };
};

const init = {
    parameterSize: 25,
    addDivs: function(x){
        let containers = document.getElementById("first-container");
        for(let i = 0; i<x; i++){
            for (let j = 0; j<x; j++){
                let newDiv = document.createElement("div");
                newDiv.setAttribute("class", "square");
                newDiv.setAttribute("style", "height: "+x+"px");
                init.colorChange(newDiv, "blackSquare");
                containers.appendChild(newDiv);

            }
        }
    },
    changeParameter: function(){
        init.parameterSize = 5;
        init.addDivs(init.parameterSize);
        //this doesnt do anything that I want it to just yet
    },
    colorChange: function(newDiv, updateClass){
        newDiv.addEventListener("mouseenter", e => newDiv.classList.add(updateClass));
    },
    deleteDivs: function(){
        for(let div in containers = document.getElementById("container")){
        containers.remove();}
    },
    changeSize: 438
};
init.addDivs(init.parameterSize);
