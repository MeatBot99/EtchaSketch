
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

  let divExperiment = document.getElementById("divExperiment");
  let m = sWidth;

  for (let p=0; p<m; p++){
    let scall = document.createElement("div")
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

};

createGrid(16);



///////////////////////////////////////////////////////////////////////////////////////////
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
        let containers = document.getElementById("container");
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
