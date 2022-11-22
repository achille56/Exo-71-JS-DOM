let monDiv = document.createElement('div');
monDiv.innerText = "Ce div a été ajouté en utilisant javascript";

document.getElementById('viewport').appendChild(monDiv);

let secondDiv = document.createElement("secondDiv")
    secondDiv.innerText = "coucou";
    secondDiv.style.backgroundColor = "blue";
    secondDiv.style.border ="1px solid black";
    secondDiv.style.width = "100px";
    secondDiv.style.height = "100px";

    document.getElementById("viewport").appendChild(secondDiv);

let aSupprimer = document.getElementById("aSupprimer");
    aSupprimer.remove();








