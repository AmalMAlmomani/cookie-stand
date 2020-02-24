'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopLocation1 = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    Avg: 6.3,
    cookiesAvg: 0,
    customer: [],
    cookies: [],
    sum: 0,
    avgCustomer1: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },

    cookiesRandom: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customer[j] * this.Avg));

        }
    },
    
    cookiesS: function () {
        var sumation = 0;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i];

        }
        this.sum = sumation;
    },



    render: function () {
        var container = document.getElementById('sales');
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;
        var ulE1 = document.createElement('ul');
        h2E1.appendChild(ulE1);
        for (var i = 0; i < hours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;


        }
        liE1.textContent = `Total: ${this.sum} cookies`;
        console.log(container);
    }


}




shopLocation1.avgCustomer1();
shopLocation1.cookiesRandom();
shopLocation1.cookiesS();
shopLocation1.render();
console.log(shopLocation1);

///////////////////////////////////////////////////////////////////////////////////
var shopLocation2 = {
    location: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    Avg: 1.2,
    cookiesAvg: 0,
    customer: [],
    cookies: [],
    sum: 0,
    avgCustomer1: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },

    cookiesRandom: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customer[j] * this.Avg));

        }
    },
    
    cookiesS: function () {
        var sumation = 0;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i];

        }
        this.sum = sumation;
    },



    render: function () {
        var container = document.getElementById('sales');
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;
        var ulE1 = document.createElement('ul');
        h2E1.appendChild(ulE1);
        for (var i = 0; i < hours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;


        }
        liE1.textContent = `Total: ${this.sum} cookies`;
        console.log(container);
    }


}




shopLocation2.avgCustomer1();
shopLocation2.cookiesRandom();
shopLocation2.cookiesS();
shopLocation2.render();
console.log(shopLocation2);

//////////////////////////////////////////////////////////////////////////////

var shopLocation3 = {
    location: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    Avg: 3.7,
    cookiesAvg: 0,
    customer: [],
    cookies: [],
    sum: 0,
    avgCustomer1: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },

    cookiesRandom: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customer[j] * this.Avg));

        }
    },
    
    cookiesS: function () {
        var sumation = 0;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i];

        }
        this.sum = sumation;
    },



    render: function () {
        var container = document.getElementById('sales');
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;
        var ulE1 = document.createElement('ul');
        h2E1.appendChild(ulE1);
        for (var i = 0; i < hours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;


        }
        liE1.textContent = `Total: ${this.sum} cookies`;
        console.log(container);
    }


}




shopLocation3.avgCustomer1();
shopLocation3.cookiesRandom();
shopLocation3.cookiesS();
shopLocation3.render();
console.log(shopLocation3);

//////////////////////////////////////////////////////

var shopLocation4 = {
    location: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    Avg: 2.3,
    cookiesAvg: 0,
    customer: [],
    cookies: [],
    sum: 0,
    avgCustomer1: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },

    cookiesRandom: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customer[j] * this.Avg));

        }
    },
    
    cookiesS: function () {
        var sumation = 0;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i];

        }
        this.sum = sumation;
    },



    render: function () {
        var container = document.getElementById('sales');
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;
        var ulE1 = document.createElement('ul');
        h2E1.appendChild(ulE1);
        for (var i = 0; i < hours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;


        }
        liE1.textContent = `Total: ${this.sum} cookies`;
        console.log(container);
    }


}




shopLocation4.avgCustomer1();
shopLocation4.cookiesRandom();
shopLocation4.cookiesS();
shopLocation4.render();
console.log(shopLocation4);



/////////////////////////////////////////////////

var shopLocation5 = {
    location: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    Avg: 4.6,
    cookiesAvg: 0,
    customer: [],
    cookies: [],
    sum: 0,
    avgCustomer1: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },

    cookiesRandom: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customer[j] * this.Avg));

        }
    },
    
    cookiesS: function () {
        var sumation = 0;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i];

        }
        this.sum = sumation;
    },



    render: function () {
        var container = document.getElementById('sales');
        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);
        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.location;
        var ulE1 = document.createElement('ul');
        h2E1.appendChild(ulE1);
        for (var i = 0; i < hours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;


        }
        liE1.textContent = `Total: ${this.sum} cookies`;
        console.log(container);
    }


}




shopLocation5.avgCustomer1();
shopLocation5.cookiesRandom();
shopLocation5.cookiesS();
shopLocation5.render();
console.log(shopLocation5);


///////////////////////////////////

