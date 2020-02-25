'use strict'

var hours = ['6:00am', '7:00am', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var shops = [];

function Shop(location, minCustomer, maxCustomer, Avg, customer, cookies, sum) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.Avg = Avg;
    this.customer = [];
    this.cookies = [];
    this.sum = 0;
    shops.push(this);

}



Shop.prototype.avgCustomer = function () {
    for (var i = 0; i < hours.length; i++) {
        this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
}

Shop.prototype.cookiesRandom = function () {
    for (var j = 0; j < hours.length; j++) {
        this.cookies.push(Math.floor(this.customer[j] * this.Avg));

    }
}




Shop.prototype.cookiesSum = function () {
    var sumation = 0;
    for (var i = 0; i < this.cookies.length; i++) {
        sumation += this.cookies[i];

    }
    this.sum = sumation;
    console.log(this.sum)
    return this.sum;
}





var tableE1 = document.createElement('table');

Shop.prototype.render = function () {
    var container = document.getElementById('sales');
    container.appendChild(tableE1);
    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);
    var thE1 = document.createElement('th');
    trE1.appendChild(thE1);
    //thE1.textContent = this.location;

}

function TableData() {
    for (var d = 0; d < shops.length; d++) {
        var trE3 = document.createElement('tr');
        tableE1.appendChild(trE3);
        var tdE1 = document.createElement('td');
        tableE1.appendChild(tdE1);
        tdE1.textContent = shops[d].location;

        for (var c = 0; c < hours.length; c++) {
            var tdE2 = document.createElement('td');
            tableE1.appendChild(tdE2);
            tdE2.textContent = shops[d].cookies[c];



        }
        var tdE3 = document.createElement('td');
        tableE1.appendChild(tdE3);
        tdE3.textContent = shops[d].sum;
    }
}

function TableHeader() {
    var trE2 = document.createElement('tr');
    tableE1.appendChild(trE2);
    var thE2 = document.createElement('th');
    trE2.appendChild(thE2);
    //thE2.textContent = `..............`;


    for (var h = 0; h < hours.length; h++) {
        thE2 = document.createElement('th');
        thE2.textContent = hours[h];
        trE2.appendChild(thE2);

    }

    var thE3 = document.createElement('th');
    thE3.textContent = `Daily Location Total`;
    trE2.appendChild(thE3);
    tableE1.appendChild(trE2);


}

function TableFooter() {
    var trE3 = document.createElement('tr');
    tableE1.appendChild(trE3);
    var tdE4 = document.createElement('td');
    trE3.appendChild(tdE4);
    tdE4.textContent = 'Totals';
    tableE1.appendChild(trE3);
    var y = 0;
    var result = 0;
    for (var f = 0; f < hours.length; f++) {
        var tdE4 = document.createElement('td');
        trE3.appendChild(tdE4);
        var n = 0;
        for (var s = 0; s < shops.length; s++) {
            n += shops[s].cookies[y];
        }
        y++;
        result += n;
        tdE4.textContent = n;

    }
    var tdE5 = document.createElement('td');
    tdE5.textContent = result;
    trE3.appendChild(tdE5);

}

var shop1 = new Shop('Seattle', 23, 65, 6.3);
console.log(this.shop1);
var shop2 = new Shop('Tokyo', 3, 24, 1.2);
console.log(shop2);
var shop3 = new Shop('Dubai', 11, 38, 3.7);
console.log(shop3);
var shop4 = new Shop('Paris', 20, 38, 2.3);
console.log(shop4);
var shop5 = new Shop('Lima', 2, 16, 4.6);
console.log(shop5);



TableHeader();


for (var r = 0; r < shops.length; r++) {
    shops[r].avgCustomer();
    shops[r].cookiesRandom();
    shops[r].cookiesSum();

    shops[r].render();


}
TableData();
TableFooter();

//////////////////////////////////////////////////
// var shopLocation1 = {
//     location: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     Avg: 6.3,
//     customer: [],
//     cookies: [],
//     sum: 0,
//     avgCustomer1: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
//         }
//     },

//     cookiesRandom: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customer[j] * this.Avg));

//         }
//     },

//     cookiesS: function () {
//         var sumation = 0;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation += this.cookies[i];

//         }
//         this.sum = sumation;
//     },



//     render: function () {
//         var container = document.getElementById('sales');
//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);
//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;
//         var ulE1 = document.createElement('ul');
//         h2E1.appendChild(ulE1);
//         for (var i = 0; i < this.cookies.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = `${ hours[i]}: ${ this.cookies[i] } cookies`;
//         }
//         liE1.textContent = `Total: ${ this.sum } cookies`;
//         console.log(container);
//     }


// }




// shopLocation1.avgCustomer1();
// shopLocation1.cookiesRandom();
// shopLocation1.cookiesS();
// shopLocation1.render();
// console.log(shopLocation1);

// ///////////////////////////////////////////////////////////////////////////////////
// var shopLocation2 = {
//     location: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     Avg: 1.2,
//     cookiesAvg: 0,
//     customer: [],
//     cookies: [],
//     sum: 0,
//     avgCustomer1: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
//         }
//     },

//     cookiesRandom: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customer[j] * this.Avg));

//         }
//     },

//     cookiesS: function () {
//         var sumation = 0;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i];

//         }
//         this.sum = sumation;
//     },



//     render: function () {
//         var container = document.getElementById('sales');
//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);
//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;
//         var ulE1 = document.createElement('ul');
//         h2E1.appendChild(ulE1);
//         for (var i = 0; i < hours.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = `${ hours[i]}: ${ this.cookies[i] } cookies`;


//         }
//         liE1.textContent = `Total: ${ this.sum } cookies`;
//         console.log(container);
//     }


// }




// shopLocation2.avgCustomer1();
// shopLocation2.cookiesRandom();
// shopLocation2.cookiesS();
// shopLocation2.render();
// console.log(shopLocation2);

// //////////////////////////////////////////////////////////////////////////////

// var shopLocation3 = {
//     location: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     Avg: 3.7,
//     cookiesAvg: 0,
//     customer: [],
//     cookies: [],
//     sum: 0,
//     avgCustomer1: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
//         }
//     },

//     cookiesRandom: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customer[j] * this.Avg));

//         }
//     },

//     cookiesS: function () {
//         var sumation = 0;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i];

//         }
//         this.sum = sumation;
//     },



//     render: function () {
//         var container = document.getElementById('sales');
//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);
//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;
//         var ulE1 = document.createElement('ul');
//         h2E1.appendChild(ulE1);
//         for (var i = 0; i < hours.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = `${ hours[i]}: ${ this.cookies[i] } cookies`;


//         }
//         liE1.textContent = `Total: ${ this.sum } cookies`;
//         console.log(container);
//     }


// }




// shopLocation3.avgCustomer1();
// shopLocation3.cookiesRandom();
// shopLocation3.cookiesS();
// shopLocation3.render();
// console.log(shopLocation3);

// //////////////////////////////////////////////////////

// var shopLocation4 = {
//     location: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     Avg: 2.3,
//     cookiesAvg: 0,
//     customer: [],
//     cookies: [],
//     sum: 0,
//     avgCustomer1: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
//         }
//     },

//     cookiesRandom: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customer[j] * this.Avg));

//         }
//     },

//     cookiesS: function () {
//         var sumation = 0;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i];

//         }
//         this.sum = sumation;
//     },



//     render: function () {
//         var container = document.getElementById('sales');
//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);
//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;
//         var ulE1 = document.createElement('ul');
//         h2E1.appendChild(ulE1);
//         for (var i = 0; i < hours.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = `${ hours[i]}: ${ this.cookies[i] } cookies`;


//         }
//         liE1.textContent = `Total: ${ this.sum } cookies`;
//         console.log(container);
//     }


// }




// shopLocation4.avgCustomer1();
// shopLocation4.cookiesRandom();
// shopLocation4.cookiesS();
// shopLocation4.render();
// console.log(shopLocation4);



// /////////////////////////////////////////////////

// var shopLocation5 = {
//     location: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     Avg: 4.6,
//     cookiesAvg: 0,
//     customer: [],
//     cookies: [],
//     sum: 0,
//     avgCustomer1: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
//         }
//     },

//     cookiesRandom: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customer[j] * this.Avg));

//         }
//     },

//     cookiesS: function () {
//         var sumation = 0;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i];

//         }
//         this.sum = sumation;
//     },



//     render: function () {
//         var container = document.getElementById('sales');
//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);
//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = this.location;
//         var ulE1 = document.createElement('ul');
//         h2E1.appendChild(ulE1);
//         for (var i = 0; i < hours.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             liE1.textContent = `${ hours[i]}: ${ this.cookies[i] } cookies`;


//         }
//         liE1.textContent = `Total: ${ this.sum } cookies`;
//         console.log(container);
//     }


// }




// shopLocation5.avgCustomer1();
// shopLocation5.cookiesRandom();
// shopLocation5.cookiesS();
// shopLocation5.render();
// console.log(shopLocation5);


///////////////////////////////////

