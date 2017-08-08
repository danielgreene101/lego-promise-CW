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

//version 1
//let colorPromise = Legos.loadLegos()
////console.log("colorPromise", colorPromise);
//.then(
//(resolve) => {
//    //do some stuff
//    let newItem = {LegoName: "Daniel's Brick", ColorHex: "a3a3d1", YearFrom: "2009", YearTo: "Present"}
//    resolve.push(newItem);
//    showItems(resolve);
//},
//    (reject) => {
//        console.error("OOPS", reject);
//        //do something else here
//    });


//version 2 with additional .then

let colorPromise = Legos.loadLegos()
.then(
    (resolve) => {
        let newItem = {LegoName: "Daniel's Brick", ColorHex: "a3a3d1", YearFrom: "2009", YearTo: "Present"}
        resolve.push(newItem);
        return resolve;
    },
    (reject) => {
        console.log("OOPS", reject);
        //backupPlan();
    }).then(
    (resolve) => {
        console.log("One for the road", resolve);
        showItems(resolve);
    },
    () => {
    //default to catch anything else
    console.log("There was an error somewhere");
});

//promise All 

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, 'foo');
});

Promise.all([p3, p1, p2])
.then(
    (resolve) => {
        console.log("resolve values", resolve);
    }),
    (reason) =>{
    console.log("reason", reason);
}


//Promise Race

p11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});

p22 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});

p33 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});


p44 = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, "four");
});

p55 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "five");
//    reject("The Empire Did Nothing Wrong")
});

Promise.race([p11, p22, p33, p44, p55])
.then( (winner) =>{
    console.log("winner", winner);
    console.log("Show me the lego array", Legos.getLegos());
},
(reject) => {
    console.log("reject", reject);
});















