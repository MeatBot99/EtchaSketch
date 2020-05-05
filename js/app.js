//App.js//
const init = {
    start: function(){
        let container = document.getElementById("container");
        console.log("Container created?");},
    addDivs: function(){
        for(let i = 0; i<10; i++){
            for (let j = 0; j<10; j++){
                let newDiv = document.createElement("div");
                newDiv.setAttribute("id", j*i+1)
                container.appendChild(newDiv);
                console.log(newDiv.id)
            }
        }
    }
};

init.start();
init.addDivs();