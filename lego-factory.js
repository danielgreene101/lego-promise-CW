"use strict"

var Legos = ( (originalLegos) => {
    
    let legoItems = [];
    
    let parseData = (data) => {
        data.LegoColorss.forEach( (element) => {
            legoItems.push(element);
        });
        return legoItems;
    }
    
    originalLegos.getLegos = () => {
        return legoItems;
    }
    
    
    originalLegos.loadLegos = () => {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.onload = function (){
                if(request.status === 200){
                    //success
                    let data = JSON.parse(request.responseText);
//                    console.log("data", data);
//                    console.log('newData', parseData(data));
                    resolve(parseData(data));
                    //default
//                    resolve(request.response)
                }else{
                    reject(new Error('XMLHttpRequest Error', request.statusText));
                }
            };
            request.open('GET', 'lego-colors.json', 'true');
            request.send();
        });
    };
    
    
    return originalLegos;
})(Legos || {});