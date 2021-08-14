let ws = new WebSocket('wss://stream.binance.com:9443/ws/bcheur@trade');
let stockPriceElement = document.getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => {                                                                                             //Bei nachricht
    let stockObject = JSON.parse(event.data);                                                                           //Umwandlung
    console.log(stockObject);                                                                                           //Print
    let price = parseFloat(stockObject.p).toFixed(2);                                                                   //Umwandlung Variable 
    stockPriceElement.innerText = price;                                                                                //In Html inhalt ändern

    if (!lastPrice || lastPrice === price){
        stockPriceElement.style.color ='white'
    } else if (price > lastPrice){
        stockPriceElement.style.color ='green'
    } else { 
        stockPriceElement.style.color ='red'
    }

    lastPrice = price;                                                                                                  //Speichert alten Wert
};