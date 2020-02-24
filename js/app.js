'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopLocation1 = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    Avg: 6.3,
    customerNum: 0,
    cookiesAvg: 0,
    //counter: 0,
    customer: [],


    cookiesRandom: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookiesAvg = Math.floor(this.customerNum * this.Avg);
            //this.counter = this.counter + this.cookiesAvg;
            //this.customer[i] = this.cookiesAvg;
            this.customer[i]= this.cookiesAvg;
        }
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
            liE1.textContent = `${hours[i]}: ${this.customer[i]} cookies`;


        }
        var total = 0;
        for (var j = 0; i < this.customer[j]; j++) {
            //var total=  this.counter+ this.customer[j];
            total = Math.floor(total + this.customer[j]);
            liE1.textContent = `Total:${total}cookies`;
        }


    }
}




shopLocation1.cookiesRandom(23, 65);
shopLocation1.cookiesRandom();
shopLocation1.render();
console.log(shopLocation1);

///////////////////////////////////////////////////////////////////////////////////
var shopLocation2 = {
    location: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    Avg: 1.2,
    customerNum: 0,
    cookiesAvg: 0,
    counter: 0,
    customer: [],

    cookiesRandom: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookiesAvg = Math.floor(this.customerNum * this.Avg);
            this.counter = this.counter + this.cookiesAvg;
            this.customer[i] = this.cookiesAvg;

        }

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
            liE1.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
        }
        var total = 0;
        for (var j = 0; i < this.customer[j]; j++) {
            //var total=  this.counter+ this.customer[j];
            total = total + this.customer[j];
            liE1.textContent = `Total:${total}cookies`;
        }
    }

}
shopLocation2.cookiesRandom(3, 24);
shopLocation2.cookiesRandom();
shopLocation2.render();
console.log(shopLocation2);
//////////////////////////////////////////////////////////////////////////////

var shopLocation3 = {
    location: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    Avg: 3.7,
    customerNum: 0,
    cookiesAvg: 0,
    counter: 0,
    customer: [],

    cookiesRandom: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookiesAvg = Math.floor(this.customerNum * this.Avg);
            this.counter = this.counter + this.cookiesAvg;
            this.customer[i] = this.cookiesAvg;

        }

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
            liE1.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
        }
        var total = 0;
        for (var j = 0; i < this.customer[j]; j++) {
            //var total=  this.counter+ this.customer[j];
            total = total + this.customer[j];
            liE1.textContent = `Total:${total}cookies`;
        }
    }

}
shopLocation3.cookiesRandom(11, 38);
shopLocation3.cookiesRandom();
shopLocation3.render();
console.log(shopLocation3);
//////////////////////////////////////////////////////

var shopLocation4 = {
    location: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    Avg: 2.3,
    customerNum: 0,
    cookiesAvg: 0,
    counter: 0,
    customer: [],

    cookiesRandom: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookiesAvg = Math.floor(this.customerNum * this.Avg);
            this.counter = this.counter + this.cookiesAvg;
            this.customer[i] = this.cookiesAvg;

        }

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
            liE1.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
        } var total = 0;
        for (var j = 0; i < this.customer[j]; j++) {
            //var total=  this.counter+ this.customer[j];
            total = total + this.customer[j];
            liE1.textContent = `Total:${total}cookies`;
        }
    }

}
shopLocation4.cookiesRandom(20, 38);
shopLocation4.cookiesRandom();
shopLocation4.render();
console.log(shopLocation4);


/////////////////////////////////////////////////

var shopLocation5 = {
    location: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    Avg: 4.6,
    customerNum: 0,
    cookiesAvg: 0,
    counter: 0,
    customer: [],

    cookiesRandom: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookiesAvg = Math.floor(this.customerNum * this.Avg);
            this.counter = this.counter + this.cookiesAvg;
            this.customer[i] = this.cookiesAvg;

        }

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
            liE1.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
        }
        var total = 0;
        for (var j = 0; i < this.customer[j]; j++) {
            //var total=  this.counter+ this.customer[j];
            total = total + this.customer[j];
            liE1.textContent = `Total:${total}cookies`;
        }
    }

}
shopLocation5.cookiesRandom(2, 16);
shopLocation5.cookiesRandom();
shopLocation5.render();
console.log(shopLocation5);

///////////////////////////////////

