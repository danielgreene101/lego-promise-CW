console.log('main.js');

"use strict"

let greetingpromise = () => {
    new Promise((resolve, reject) =>{ //resolve is successful reject it isnt
        setTimeout( () => {
            resolve("World");
        }, 3000);
    }).then((resolve) =>{
        console.log("resolve", resolve);
    });
}

greetingpromise();
console.log("Hello");

let showItems = (legosData) => {
    let legoDisplay = document.getElementById("lego-display")
    legosData.forEach( (lego) =>{
        let legoBlock = buildLego(lego);
        legoDisplay.innerHTML += legoBlock;
    })
}


let buildLego = (lego) => {
    //building a string to create the visual display

    //each seperated by comma
    let block = "",
        wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
        title = `<h3>Name: ${lego.LegoName}</h3>`,
        years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;
        // image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
        let link = lego.ColorstreamLinkImage;
        if (link){
             block += `<a href="${link}">${wrapper + title + years}</section></a>`;
        }else{
            block += `${wrapper + title + years}</section>`;
        }
      return block;
};


let colorPromise = Legos.loadLegos()
.then(
(resolve) => {
    //do some stuff
    let newItem = {LegoName: "Daniel's Brick", ColorHex: "a3a3d1", YearFrom: "2009", YearTo: "Present"}
    resolve.push(newItem);
    showItems(resolve);
},
    (reject) => {
        console.error("OOPS", reject);
        //do something else here
    })