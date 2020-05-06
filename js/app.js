const init = {
    parameterSize: 16, 
    addDivs: function(x){
        let container = document.getElementById("container");
        for(let i = 0; i<x; i++){
            for (let j = 0; j<x; j++){
                let newDiv = document.createElement("div");
                newDiv.setAttribute("class", "square");
                newDiv.setAttribute("style", "height: "+x+"px");
                container.appendChild(newDiv);
            }
        }
    },
    changeParameter: function(){
        init.parameterSize = 5;
        init.addDivs(init.parameterSize);
        //this doesnt do anything that I want it to just yet
    }
};

init.addDivs(init.parameterSize);