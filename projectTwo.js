var orderTotal = 0;
var grandTotal = 0;
var burritos = [];

function init() {
    
    var addToOrder = document.getElementById("order");
    addToOrder.onclick = createOrder; 
}    

function createOrder() {
    
    var burritoField = document.getElementById("burrito");
    var index = burritoField.selectedIndex;
    
    var burritoChoice = burritoField.options[index].value;
    
    var riceField = document.getElementsByName("rice");
    for (var a = 0; a < riceField.length; a++) {
        if (riceField[a].checked) {
            var riceChoice = riceField[a].value;
        }    
    }
    
    var beansField = document.getElementsByName("beans");
    for (var b = 0; b < beansField.length; b++) {
        if (beansField[b].checked) {
            var beansChoice = beansField[b].value;
        }    
    }
    
    var salsaField = document.getElementsByName("salsa");
    var salsaChoice = "";
    for (var c = 0; c < salsaField.length; c++) {
        if (salsaField[c].checked) {
            salsaChoice += salsaField[c].value + " ";
        }
    }
    
    var guacamoleField = document.getElementsByName("guacamole");
    for (var d = 0; d < guacamoleField.length; d++) {
        if (guacamoleField[d].checked) {
           var guacChoice = guacamoleField[d].value;
        } else {
            guacChoice = "No Guacamole";
        }
    }

    var burritoArray = {
        "burrito": burritoChoice,
        "rice": riceChoice,
        "beans": beansChoice,
        "salsa": salsaChoice,
        "guacamole": guacChoice,
        "price": orderTotal
    };

    burritos.push(burritoArray);
    

    if (burritoChoice !== "Select One") {
        addAmount();
        createReceipt(burritos);
        burritos.shift();
    } else {
        alert("Please choose a burrito.");
    }

    calculategrandTotal();
}

function createReceipt(burritos) {
      
    for (var i=0; i < burritos.length; i++) {
      var burritoOrder = document.createElement("div");
      burritoOrder.setAttribute("id", "output");        
      var p1 = document.createElement("p");
      var burritoValue = document.createTextNode("Burrito: " + burritos[i].burrito);
      p1.appendChild(burritoValue);
      var p2 = document.createElement("p");
      var riceValue = document.createTextNode("Rice: " + burritos[i].rice);
      p2.appendChild(riceValue);
      var p3 = document.createElement("p");
      var beansValue = document.createTextNode("Beans: " + burritos[i].beans);
      p3.appendChild(beansValue);
      var p4 = document.createElement("p");
      var salsaValue = document.createTextNode("Salsa: " + burritos[i].salsa);
      p4.appendChild(salsaValue);
      var p5 = document.createElement("p");
      var guacValue = document.createTextNode("Guacamole: " + burritos[i].guacamole);
      p5.appendChild(guacValue);
      burritoOrder.appendChild(p1);
      burritoOrder.appendChild(p2);
      burritoOrder.appendChild(p3);
      burritoOrder.appendChild(p4);
      burritoOrder.appendChild(p5);
      var p6 = document.createElement("p");
      var total = document.createTextNode("Order Total: $" + orderTotal.toFixed(2));
      p6.appendChild(total);
      burritoOrder.appendChild(p6);
      var br = document.createElement("br");
      p6.appendChild(br);
      var remove = document.createElement('input');
      remove.setAttribute("type", "button");
      remove.setAttribute("value", "Remove");
      remove.setAttribute("id", "removeButton");
      remove.addEventListener('click', function(e) {
        e.preventDefault();
        updateGrandTotal();
        burritoOrder.parentNode.removeChild(burritoOrder);
      });
      burritoOrder.appendChild(remove);
      var br = document.createElement("br");
      burritoOrder.appendChild(br);
      document.body.appendChild(burritoOrder);
    }


}

function addAmount() {
    
    orderTotal = 0;
    
    if (document.getElementById("burrito").value == "Chicken") {
      orderTotal += 6.20;
    }
    
    if (document.getElementById("burrito").value == "Steak") {
      orderTotal += 6.75;
    }
    
    if (document.getElementById("burrito").value == "Carnitas") {
      orderTotal += 6.60;
    }
    
    if (document.getElementById("burrito").value == "Barbacoa") {
      orderTotal += 6.60;
    }
    
    if (document.getElementById("burrito").value == "Vegetarian") {
      orderTotal += 6.20;
    }
    
    if (document.getElementById("guacamole").checked) {
      orderTotal += 1.40;
    }
    
    return orderTotal;
}

function calculategrandTotal() {
    
    grandTotal += orderTotal;
    
    var output = document.createElement('div');
	output.setAttribute('id', 'output');
    var h3 = document.createElement("h3");
    h3.setAttribute("id", "grand");
    var grandTotalValue = document.createTextNode("Grand Total: $" + grandTotal.toFixed(2));
    h3.appendChild(grandTotalValue);
    output.appendChild(h3);
    
 
    if (!document.getElementById('grand')) {
        document.getElementById('grandTotalValue').appendChild(output);
        document.getElementById('output').appendChild(h3);
    } else {
		var removeOutput = document.getElementById('output'); 
		removeOutput.parentNode.removeChild(removeOutput);
		document.getElementById('grandTotalValue').appendChild(output);
        document.getElementById('output').appendChild(h3);
    }    
}

function updateGrandTotal() {

    grandTotal -= orderTotal;

    var output = document.createElement('div');
	output.setAttribute('id', 'output');
    var h3 = document.createElement("h3");
    h3.setAttribute("id", "grand");
    var grandTotalValue = document.createTextNode("Grand Total: $" + grandTotal.toFixed(2));
    h3.appendChild(grandTotalValue);
    output.appendChild(h3);
    
 
    if (!document.getElementById('grand')) {
        document.getElementById('grandTotalValue').appendChild(output);
        document.getElementById('output').appendChild(h3);
    } else {
		var removeOutput = document.getElementById('output'); 
		removeOutput.parentNode.removeChild(removeOutput);
		document.getElementById('grandTotalValue').appendChild(output);
        document.getElementById('output').appendChild(h3);
    }
    
}