const init = {
    parameterSize: 16,
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
    changeSize: 439
};
init.addDivs(init.parameterSize);

let experiment = document.getElementById("experiment");

let n = 16;

for (let i=0; i<n; i++){
  let call = document.createElement("ul")
   for (let j=0;j<n;j++){
     let rowe = document.createElement("li");
     rowe.innerText = i;
     call.appendChild(rowe);
   }
  experiment.appendChild(call);
}
