// My javascript lives in here
// OBJECT LITERALS
'use strict';
console.log('my js is connected to my html');

// Test object, just for funsies
var rubberDuck = {
  material: 'rubber',
  color: 'yellow',
  squeaks: false,
  favoriteFoods: ['duckweed', 'peanut butter', 'little children'],
  says: function() {
    console.log('quack');
  }
};

// Array for hours of the day the coffee shops are open
var openTimes = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// Objects for coffee shop locations
// Build just one for starters
// var pike = {
//   shopName: 'Pike Place',
//   maxCust: 55,
//   minCust: 15,
//   randCust: function() {
//     return Math.floor(Math.random() * (pike.maxCust - pike.minCust + 1) + pike.minCust);
//   },
//   cupsCust: 1.2,
//   lbsCust: 3.7,
//   cupsTotal: function() {
//     return Math.round(1.2 * pike.randCust());
//   },
//   lbsTotal: function() {
//     return Math.round(3.7 * pike.randCust());
//   }
// };
// console.log(pike.randCust());
// console.log(pike.cupsTotal());
// console.log(pike.lbsTotal());

var caphill = {
  shopName: 'Capitol Hill',
  maxCust: 48,
  minCust: 32,
  hourlyCust: [],

  randCust: function() {
    for (var i = 0; i < openTimes.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },

  cupsCustAvg: 3.2,
  lbsCustAvg: 0.4,
  hourlyCups: [],
  hourlyLbsFromCups: [],
  hourlyLbsFromBeanSales: [],

  genHourlyCups: function() {
    for (var i = 0; i < this.hourlyCust.length; i++) {
      this.hourlyCups.push(Math.round(this.cupsCustAvg * this.hourlyCust[i]));
    }
  },

  genHourlyLbsFromCups: function() {
    for (var i = 0; i < this.hourlyCups.length; i++) {
      this.hourlyLbsFromCups.push(Math.round(this.hourlyCups[i] / 20));
    }
  },

  genHourlyLbsFromBeanSales: function() {
    for (var i = 0; i < this.hourlyCust.length; i++) {
      this.hourlyLbsFromBeanSales.push(Math.round(this.lbsCustAvg * this.hourlyCust[i]));
    }
  },

  /*inspiration for following two functions found at http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers*/
  sumCupBeans: function() {
    function add(a, b) {
      return a + b;
    }
    return this.hourlyLbsFromCups.reduce(add, 0);
  },

  sumSalesBeans: function() {
    function add(a, b) {
      return a + b;
    }
    return this.hourlyLbsFromBeanSales.reduce(add, 0);
  },

  totalDailyCups: false,

};

function CoffeeShop(shopName, minCust, maxCust, cupsCustAvg, lbsCustAvg) {
  this.shopName = shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cupsCustAvg = cupsCustAvg;
  this.lbsCustAvg = lbsCustAvg;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.hourlyLbsFromCups = [];
  this.hourlyLbsFromBeanSales = [];
  this.totalHourlyLbsBeans = [];
}

CoffeeShop.prototype.randCust = function() {
  for (var i = 0; i < openTimes.length; i++) {
    this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  }
}

CoffeeShop.prototype.genHourlyCups = function() {
  for (var i = 0; i < this.hourlyCust.length; i++) {
    this.hourlyCups.push(Math.round(this.cupsCustAvg * this.hourlyCust[i]));
  }
}

CoffeeShop.prototype.genHourlyLbsFromCups = function() {
  for (var i = 0; i < this.hourlyCups.length; i++) {
    this.hourlyLbsFromCups.push(Math.round(this.hourlyCups[i] / 20));
  }
}

CoffeeShop.prototype.genHourlyLbsFromBeanSales = function() {
  for (var i = 0; i < this.hourlyCust.length; i++) {
    this.hourlyLbsFromBeanSales.push(Math.round(this.lbsCustAvg * this.hourlyCust[i]));
  }
}

CoffeeShop.prototype.sumCupBeans = function() {
  function add(a, b) {
    return a + b;
  }
  this.totalHourlyLbsBeans.push(this.hourlyLbsFromCups.reduce(add, 0));
}

CoffeeShop.prototype.sumSalesBeans = function() {
  function add(a, b) {
    return a + b;
  }
  this.totalHourlyLbsBeans.push(this.hourlyLbsFromBeanSales.reduce(add, 0));
}

CoffeeShop.prototype.superTotalHourlyLbsBeans = function() {
  function add(a, b) {
    return a + b;
  }
  return this.totalHourlyLbsBeans.reduce(add, 0);
}

var seatac = new CoffeeShop('SeaTac', 68, 124, 1.1, 2.7);

console.log(seatac.shopName, seatac.minCust, seatac.maxCust, seatac.cupsCustAvg, seatac.lbsCustAvg);

CoffeeShop.prototype.displayShopDataTable = function() {
    var tableTitle = document.getElementById('dynamicTitle')
    tableTitle.innerHTML = this.shopName
    var shopDataTable = document.getElementById('thisData');
    console.log(shopDataTable);
    this.randCust();
    this.genHourlyCups();
    this.genHourlyLbsFromCups();
    this.genHourlyLbsFromBeanSales();
    this.sumCupBeans();
    this.sumSalesBeans();

    var shopDataRow01 = shopDataTable.insertRow(0);
    var shopDataRow02 = shopDataTable.insertRow(1);
    var shopDataRow03 = shopDataTable.insertRow(2);
    var shopDataRow04 = shopDataTable.insertRow(3);
    var shopDataRow05 = shopDataTable.insertRow(4);
    var shopDataRow06 = shopDataTable.insertRow(5);
    var shopDataRow07 = shopDataTable.insertRow(6);
    var shopDataRow08 = shopDataTable.insertRow(7);
    var shopDataRow09 = shopDataTable.insertRow(8);
    var shopDataRow10 = shopDataTable.insertRow(9);
    var shopDataRow11 = shopDataTable.insertRow(10);
    var shopDataRow12 = shopDataTable.insertRow(11);
    var shopDataRow13 = shopDataTable.insertRow(12);
    var shopDataRow14 = shopDataTable.insertRow(13);
    var shopDataRow15 = shopDataTable.insertRow(14);
    var shopDataRow16 = shopDataTable.insertRow(15);

    var shopDataCell01a = shopDataRow01.insertCell(0);
    var shopDataCell01b = shopDataRow01.insertCell(1);
    var shopDataCell02a = shopDataRow01.insertCell(2);
    var shopDataCell02b = shopDataRow01.insertCell(3);
    var shopDataCell03a = shopDataRow01.insertCell(4);
    var shopDataCell03b = shopDataRow01.insertCell(5);

    var shopDataCell04a = shopDataRow02.insertCell(0);
    var shopDataCell04b = shopDataRow02.insertCell(1);
    var shopDataCell05a = shopDataRow02.insertCell(2);
    var shopDataCell05b = shopDataRow02.insertCell(3);
    var shopDataCell06a = shopDataRow02.insertCell(4);
    var shopDataCell06b = shopDataRow02.insertCell(5);

    var shopDataCell07a = shopDataRow03.insertCell(0);
    var shopDataCell07b = shopDataRow03.insertCell(1);
    var shopDataCell08a = shopDataRow03.insertCell(2);
    var shopDataCell08b = shopDataRow03.insertCell(3);
    var shopDataCell09a = shopDataRow03.insertCell(4);
    var shopDataCell09b = shopDataRow03.insertCell(5);

    var shopDataCell10a = shopDataRow04.insertCell(0);
    var shopDataCell10b = shopDataRow04.insertCell(1);
    var shopDataCell11a = shopDataRow04.insertCell(2);
    var shopDataCell11b = shopDataRow04.insertCell(3);
    var shopDataCell12a = shopDataRow04.insertCell(4);
    var shopDataCell12b = shopDataRow04.insertCell(5);

    var shopDataCell13a = shopDataRow05.insertCell(0);
    var shopDataCell13b = shopDataRow05.insertCell(1);
    var shopDataCell14a = shopDataRow05.insertCell(2);
    var shopDataCell14b = shopDataRow05.insertCell(3);
    var shopDataCell15a = shopDataRow05.insertCell(4);
    var shopDataCell15b = shopDataRow05.insertCell(5);

    var shopDataCell16a = shopDataRow06.insertCell(0);
    var shopDataCell16b = shopDataRow06.insertCell(1);
    var shopDataCell17a = shopDataRow06.insertCell(2);
    var shopDataCell17b = shopDataRow06.insertCell(3);
    var shopDataCell18a = shopDataRow06.insertCell(4);
    var shopDataCell18b = shopDataRow06.insertCell(5);

    var shopDataCell19a = shopDataRow07.insertCell(0);
    var shopDataCell19b = shopDataRow07.insertCell(1);
    var shopDataCell20a = shopDataRow07.insertCell(2);
    var shopDataCell20b = shopDataRow07.insertCell(3);
    var shopDataCell21a = shopDataRow07.insertCell(4);
    var shopDataCell21b = shopDataRow07.insertCell(5);

    var shopDataCell22a = shopDataRow08.insertCell(0);
    var shopDataCell22b = shopDataRow08.insertCell(1);
    var shopDataCell23a = shopDataRow08.insertCell(2);
    var shopDataCell23b = shopDataRow08.insertCell(3);
    var shopDataCell24a = shopDataRow08.insertCell(4);
    var shopDataCell24b = shopDataRow08.insertCell(5);

    var shopDataCell25a = shopDataRow09.insertCell(0);
    var shopDataCell25b = shopDataRow09.insertCell(1);
    var shopDataCell26a = shopDataRow09.insertCell(2);
    var shopDataCell26b = shopDataRow09.insertCell(3);
    var shopDataCell27a = shopDataRow09.insertCell(4);
    var shopDataCell27b = shopDataRow09.insertCell(5);

    var shopDataCell28a = shopDataRow10.insertCell(0);
    var shopDataCell28b = shopDataRow10.insertCell(1);
    var shopDataCell29a = shopDataRow10.insertCell(2);
    var shopDataCell29b = shopDataRow10.insertCell(3);
    var shopDataCell30a = shopDataRow10.insertCell(4);
    var shopDataCell30b = shopDataRow10.insertCell(5);

    var shopDataCell31a = shopDataRow11.insertCell(0);
    var shopDataCell31b = shopDataRow11.insertCell(1);
    var shopDataCell32a = shopDataRow11.insertCell(2);
    var shopDataCell32b = shopDataRow11.insertCell(3);
    var shopDataCell33a = shopDataRow11.insertCell(4);
    var shopDataCell33b = shopDataRow11.insertCell(5);

    // AAAAAAAAAA, MY EYES!!!!!

    var shopDataCell34a = shopDataRow12.insertCell(0);
    var shopDataCell34b = shopDataRow12.insertCell(1);
    var shopDataCell35a = shopDataRow12.insertCell(2);
    var shopDataCell35b = shopDataRow12.insertCell(3);
    var shopDataCell36a = shopDataRow12.insertCell(4);
    var shopDataCell36b = shopDataRow12.insertCell(5);

    var shopDataCell37a = shopDataRow13.insertCell(0);
    var shopDataCell37b = shopDataRow13.insertCell(1);
    var shopDataCell38a = shopDataRow13.insertCell(2);
    var shopDataCell38b = shopDataRow13.insertCell(3);
    var shopDataCell39a = shopDataRow13.insertCell(4);
    var shopDataCell39b = shopDataRow13.insertCell(5);

    // MAKE IT STOP!!!!!!

    var shopDataCell40a = shopDataRow14.insertCell(0);
    var shopDataCell40b = shopDataRow14.insertCell(1);
    var shopDataCell41a = shopDataRow14.insertCell(2);
    var shopDataCell41b = shopDataRow14.insertCell(3);
    var shopDataCell42a = shopDataRow14.insertCell(4);
    var shopDataCell42b = shopDataRow14.insertCell(5);

    var shopDataCell43a = shopDataRow15.insertCell(0);
    var shopDataCell43b = shopDataRow15.insertCell(1);
    var shopDataCell44a = shopDataRow15.insertCell(2);
    var shopDataCell44b = shopDataRow15.insertCell(3);
    var shopDataCell45a = shopDataRow15.insertCell(4);
    var shopDataCell45b = shopDataRow15.insertCell(5);

    var shopDataCell46a = shopDataRow16.insertCell(0);
    var shopDataCell46b = shopDataRow16.insertCell(1);
    var shopDataCell47a = shopDataRow16.insertCell(2);
    var shopDataCell47b = shopDataRow16.insertCell(3);
    var shopDataCell48a = shopDataRow16.insertCell(4);
    var shopDataCell48b = shopDataRow16.insertCell(5);

    shopDataCell01a.innerHTML = 'Time of day';
    shopDataCell01b.innerHTML = 'Grand total lbs.';
    shopDataCell02a.innerHTML = 'No. of customers';
    shopDataCell02b.innerHTML = 'No. of cups sold';
    shopDataCell03a.innerHTML = 'Lbs. used brewing coffee';
    shopDataCell03b.innerHTML = 'Lbs. of beans sold to go';

    shopDataCell04a.innerHTML = openTimes[0];
    shopDataCell04b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell05a.innerHTML = this.hourlyCust[0];
    shopDataCell05b.innerHTML = this.hourlyCups[0];
    shopDataCell06a.innerHTML = this.hourlyLbsFromCups[0];
    shopDataCell06b.innerHTML = this.hourlyLbsFromBeanSales[0];

    shopDataCell07a.innerHTML = openTimes[1];
    shopDataCell07b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell08a.innerHTML = this.hourlyCust[1];
    shopDataCell08b.innerHTML = this.hourlyCups[1];
    shopDataCell09a.innerHTML = this.hourlyLbsFromCups[1];
    shopDataCell09b.innerHTML = this.hourlyLbsFromBeanSales[1];

    shopDataCell10a.innerHTML = openTimes[2];
    shopDataCell10b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell11a.innerHTML = this.hourlyCust[2];
    shopDataCell11b.innerHTML = this.hourlyCups[2];
    shopDataCell12a.innerHTML = this.hourlyLbsFromCups[2];
    shopDataCell12b.innerHTML = this.hourlyLbsFromBeanSales[2];

    shopDataCell13a.innerHTML = openTimes[3];
    shopDataCell13b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell14a.innerHTML = this.hourlyCust[3];
    shopDataCell14b.innerHTML = this.hourlyCups[3];
    shopDataCell15a.innerHTML = this.hourlyLbsFromCups[3];
    shopDataCell15b.innerHTML = this.hourlyLbsFromBeanSales[3];

    shopDataCell16a.innerHTML = openTimes[4];
    shopDataCell16b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell17a.innerHTML = this.hourlyCust[4];
    shopDataCell17b.innerHTML = this.hourlyCups[4];
    shopDataCell18a.innerHTML = this.hourlyLbsFromCups[4];
    shopDataCell18b.innerHTML = this.hourlyLbsFromBeanSales[4];

    shopDataCell19a.innerHTML = openTimes[5];
    shopDataCell19b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell20a.innerHTML = this.hourlyCust[5];
    shopDataCell20b.innerHTML = this.hourlyCups[5];
    shopDataCell21a.innerHTML = this.hourlyLbsFromCups[5];
    shopDataCell21b.innerHTML = this.hourlyLbsFromBeanSales[5];

    shopDataCell22a.innerHTML = openTimes[6];
    shopDataCell22b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell23a.innerHTML = this.hourlyCust[6];
    shopDataCell23b.innerHTML = this.hourlyCups[6];
    shopDataCell24a.innerHTML = this.hourlyLbsFromCups[6];
    shopDataCell24b.innerHTML = this.hourlyLbsFromBeanSales[6];

    shopDataCell25a.innerHTML = openTimes[7];
    shopDataCell25b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell26a.innerHTML = this.hourlyCust[7];
    shopDataCell26b.innerHTML = this.hourlyCups[7];
    shopDataCell27a.innerHTML = this.hourlyLbsFromCups[7];
    shopDataCell27b.innerHTML = this.hourlyLbsFromBeanSales[7];

    shopDataCell28a.innerHTML = openTimes[8];
    shopDataCell28b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell29a.innerHTML = this.hourlyCust[8];
    shopDataCell29b.innerHTML = this.hourlyCups[8];
    shopDataCell30a.innerHTML = this.hourlyLbsFromCups[8];
    shopDataCell30b.innerHTML = this.hourlyLbsFromBeanSales[8];

    shopDataCell31a.innerHTML = openTimes[9];
    shopDataCell31b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell32a.innerHTML = this.hourlyCust[9];
    shopDataCell32b.innerHTML = this.hourlyCups[9];
    shopDataCell33a.innerHTML = this.hourlyLbsFromCups[9];
    shopDataCell33b.innerHTML = this.hourlyLbsFromBeanSales[9];

    shopDataCell34a.innerHTML = openTimes[10];
    shopDataCell34b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell35a.innerHTML = this.hourlyCust[10];
    shopDataCell35b.innerHTML = this.hourlyCups[10];
    shopDataCell36a.innerHTML = this.hourlyLbsFromCups[10];
    shopDataCell36b.innerHTML = this.hourlyLbsFromBeanSales[10];

    shopDataCell37a.innerHTML = openTimes[11];
    shopDataCell37b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell38a.innerHTML = this.hourlyCust[11];
    shopDataCell38b.innerHTML = this.hourlyCups[11];
    shopDataCell39a.innerHTML = this.hourlyLbsFromCups[11];
    shopDataCell39b.innerHTML = this.hourlyLbsFromBeanSales[11];

    shopDataCell40a.innerHTML = openTimes[12];
    shopDataCell40b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell41a.innerHTML = this.hourlyCust[12];
    shopDataCell41b.innerHTML = this.hourlyCups[12];
    shopDataCell42a.innerHTML = this.hourlyLbsFromCups[12];
    shopDataCell42b.innerHTML = this.hourlyLbsFromBeanSales[12];

    shopDataCell43a.innerHTML = openTimes[13];
    shopDataCell43b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell44a.innerHTML = this.hourlyCust[13];
    shopDataCell44b.innerHTML = this.hourlyCups[13];
    shopDataCell45a.innerHTML = this.hourlyLbsFromCups[13];
    shopDataCell45b.innerHTML = this.hourlyLbsFromBeanSales[13];

    shopDataCell46a.innerHTML = openTimes[14];
    shopDataCell46b.innerHTML = this.superTotalHourlyLbsBeans();
    shopDataCell47a.innerHTML = this.hourlyCust[14];
    shopDataCell47b.innerHTML = this.hourlyCups[14];
    shopDataCell48a.innerHTML = this.hourlyLbsFromCups[14];
    shopDataCell48b.innerHTML = this.hourlyLbsFromBeanSales[14];
}

var slu = new CoffeeShop('South Lake Union', 35, 88, 1.3, 3.7);

slu.displayShopDataTable();

var xxpublibrary = {
  shopName: 'Seattle Public Library',
  maxCust: 48,
  minCust: 32,
  hourlyCust: [],

  randCust: function() {
    for (var i = 0; i < openTimes.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
  },

  cupsCustAvg: 3.2,
  lbsCustAvg: 0.4,
  hourlyCups: [],
  hourlyLbsFromCups: [],
  hourlyLbsFromBeanSales: [],

  genHourlyCups: function() {
    for (var i = 0; i < this.hourlyCust.length; i++) {
      this.hourlyCups.push(Math.round(this.cupsCustAvg * this.hourlyCust[i]));
    }
  },

  genHourlyLbsFromCups: function() {
    for (var i = 0; i < this.hourlyCups.length; i++) {
      this.hourlyLbsFromCups.push(Math.round(this.hourlyCups[i] / 20));
    }
  },

  genHourlyLbsFromBeanSales: function() {
    for (var i = 0; i < this.hourlyCust.length; i++) {
      this.hourlyLbsFromBeanSales.push(Math.round(this.lbsCustAvg * this.hourlyCust[i]));
    }
  },

  /*inspiration for following two functions found at http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers*/
  sumCupBeans: function() {
    function add(a, b) {
      return a + b;
    }
    this.totalDailyCups.push(this.hourlyLbsFromCups.reduce(add, 0));
  },

  sumSalesBeans: function() {
    function add(a, b) {
      return a + b;
    }
    this.totalDailyCups.push(this.hourlyLbsFromBeanSales.reduce(add, 0));
  },

  totalDailyCups: false,

};


// caphill.prototype.totalHourlyLbsBeans = caphill.sumCupBeans() + caphill.sumSalesBeans();

// IF YOU CALL caphill.randCust() again, you'll add it to the array twice!
// console.log(caphill.randCust());

// var publibrary = {
//   maxCust: 49,
//   minCust: 75,
//   randCust: function() {
//     return Math.floor(Math.random() * (publibrary.maxCust - publibrary.minCust + 1) + publibrary.minCust);
//   },
//   cupsCust: 2.6,
//   lbsCust: 0.2
// };
// console.log(publibrary.randCust());

function insertSeaTacTable() {
  var shopDataTable = document.getElementById('seatacData');
  console.log(shopDataTable);
  seatac.randCust();
  seatac.genHourlyCups();
  seatac.genHourlyLbsFromCups();
  seatac.genHourlyLbsFromBeanSales();
  seatac.sumCupBeans();
  seatac.sumSalesBeans();

  var shopDataRow01 = shopDataTable.insertRow(0);
  var shopDataRow02 = shopDataTable.insertRow(1);
  var shopDataRow03 = shopDataTable.insertRow(2);
  var shopDataRow04 = shopDataTable.insertRow(3);
  var shopDataRow05 = shopDataTable.insertRow(4);
  var shopDataRow06 = shopDataTable.insertRow(5);
  var shopDataRow07 = shopDataTable.insertRow(6);
  var shopDataRow08 = shopDataTable.insertRow(7);
  var shopDataRow09 = shopDataTable.insertRow(8);
  var shopDataRow10 = shopDataTable.insertRow(9);
  var shopDataRow11 = shopDataTable.insertRow(10);
  var shopDataRow12 = shopDataTable.insertRow(11);
  var shopDataRow13 = shopDataTable.insertRow(12);
  var shopDataRow14 = shopDataTable.insertRow(13);
  var shopDataRow15 = shopDataTable.insertRow(14);
  var shopDataRow16 = shopDataTable.insertRow(15);

  var shopDataCell01a = shopDataRow01.insertCell(0);
  var shopDataCell01b = shopDataRow01.insertCell(1);
  var shopDataCell02a = shopDataRow01.insertCell(2);
  var shopDataCell02b = shopDataRow01.insertCell(3);
  var shopDataCell03a = shopDataRow01.insertCell(4);
  var shopDataCell03b = shopDataRow01.insertCell(5);

  var shopDataCell04a = shopDataRow02.insertCell(0);
  var shopDataCell04b = shopDataRow02.insertCell(1);
  var shopDataCell05a = shopDataRow02.insertCell(2);
  var shopDataCell05b = shopDataRow02.insertCell(3);
  var shopDataCell06a = shopDataRow02.insertCell(4);
  var shopDataCell06b = shopDataRow02.insertCell(5);

  var shopDataCell07a = shopDataRow03.insertCell(0);
  var shopDataCell07b = shopDataRow03.insertCell(1);
  var shopDataCell08a = shopDataRow03.insertCell(2);
  var shopDataCell08b = shopDataRow03.insertCell(3);
  var shopDataCell09a = shopDataRow03.insertCell(4);
  var shopDataCell09b = shopDataRow03.insertCell(5);

  var shopDataCell10a = shopDataRow04.insertCell(0);
  var shopDataCell10b = shopDataRow04.insertCell(1);
  var shopDataCell11a = shopDataRow04.insertCell(2);
  var shopDataCell11b = shopDataRow04.insertCell(3);
  var shopDataCell12a = shopDataRow04.insertCell(4);
  var shopDataCell12b = shopDataRow04.insertCell(5);

  var shopDataCell13a = shopDataRow05.insertCell(0);
  var shopDataCell13b = shopDataRow05.insertCell(1);
  var shopDataCell14a = shopDataRow05.insertCell(2);
  var shopDataCell14b = shopDataRow05.insertCell(3);
  var shopDataCell15a = shopDataRow05.insertCell(4);
  var shopDataCell15b = shopDataRow05.insertCell(5);

  var shopDataCell16a = shopDataRow06.insertCell(0);
  var shopDataCell16b = shopDataRow06.insertCell(1);
  var shopDataCell17a = shopDataRow06.insertCell(2);
  var shopDataCell17b = shopDataRow06.insertCell(3);
  var shopDataCell18a = shopDataRow06.insertCell(4);
  var shopDataCell18b = shopDataRow06.insertCell(5);

  var shopDataCell19a = shopDataRow07.insertCell(0);
  var shopDataCell19b = shopDataRow07.insertCell(1);
  var shopDataCell20a = shopDataRow07.insertCell(2);
  var shopDataCell20b = shopDataRow07.insertCell(3);
  var shopDataCell21a = shopDataRow07.insertCell(4);
  var shopDataCell21b = shopDataRow07.insertCell(5);

  var shopDataCell22a = shopDataRow08.insertCell(0);
  var shopDataCell22b = shopDataRow08.insertCell(1);
  var shopDataCell23a = shopDataRow08.insertCell(2);
  var shopDataCell23b = shopDataRow08.insertCell(3);
  var shopDataCell24a = shopDataRow08.insertCell(4);
  var shopDataCell24b = shopDataRow08.insertCell(5);

  var shopDataCell25a = shopDataRow09.insertCell(0);
  var shopDataCell25b = shopDataRow09.insertCell(1);
  var shopDataCell26a = shopDataRow09.insertCell(2);
  var shopDataCell26b = shopDataRow09.insertCell(3);
  var shopDataCell27a = shopDataRow09.insertCell(4);
  var shopDataCell27b = shopDataRow09.insertCell(5);

  var shopDataCell28a = shopDataRow10.insertCell(0);
  var shopDataCell28b = shopDataRow10.insertCell(1);
  var shopDataCell29a = shopDataRow10.insertCell(2);
  var shopDataCell29b = shopDataRow10.insertCell(3);
  var shopDataCell30a = shopDataRow10.insertCell(4);
  var shopDataCell30b = shopDataRow10.insertCell(5);

  var shopDataCell31a = shopDataRow11.insertCell(0);
  var shopDataCell31b = shopDataRow11.insertCell(0);
  var shopDataCell32a = shopDataRow11.insertCell(1);
  var shopDataCell32b = shopDataRow11.insertCell(1);
  var shopDataCell33a = shopDataRow11.insertCell(2);
  var shopDataCell33a = shopDataRow11.insertCell(2);

  // AAAAAAAAAA, MY EYES!!!!!

  var shopDataCell34a = shopDataRow12.insertCell(0);
  var shopDataCell34b = shopDataRow12.insertCell(1);
  var shopDataCell35a = shopDataRow12.insertCell(2);
  var shopDataCell35b = shopDataRow12.insertCell(3);
  var shopDataCell36a = shopDataRow12.insertCell(4);
  var shopDataCell36b = shopDataRow12.insertCell(5);

  var shopDataCell37a = shopDataRow13.insertCell(0);
  var shopDataCell37b = shopDataRow13.insertCell(1);
  var shopDataCell38a = shopDataRow13.insertCell(2);
  var shopDataCell38b = shopDataRow13.insertCell(3);
  var shopDataCell39a = shopDataRow13.insertCell(4);
  var shopDataCell39b = shopDataRow13.insertCell(5);

  // MAKE IT STOP!!!!!!

  var shopDataCell40a = shopDataRow14.insertCell(0);
  var shopDataCell40b = shopDataRow14.insertCell(1);
  var shopDataCell41a = shopDataRow14.insertCell(2);
  var shopDataCell41b = shopDataRow14.insertCell(3);
  var shopDataCell42a = shopDataRow14.insertCell(4);
  var shopDataCell42b = shopDataRow14.insertCell(5);

  var shopDataCell43a = shopDataRow15.insertCell(0);
  var shopDataCell43b = shopDataRow15.insertCell(1);
  var shopDataCell44a = shopDataRow15.insertCell(2);
  var shopDataCell44b = shopDataRow15.insertCell(3);
  var shopDataCell45a = shopDataRow15.insertCell(4);
  var shopDataCell45a = shopDataRow15.insertCell(5);

  var shopDataCell46a = shopDataRow16.insertCell(0);
  var shopDataCell46b = shopDataRow16.insertCell(1);
  var shopDataCell47a = shopDataRow16.insertCell(2);
  var shopDataCell47b = shopDataRow16.insertCell(3);
  var shopDataCell48a = shopDataRow16.insertCell(4);
  var shopDataCell48b = shopDataRow16.insertCell(5);

  shopDataCell01a.innerHTML = 'Time of day';
  shopDataCell01b.innerHTML = 'Grand total lbs.';
  shopDataCell02a.innerHTML = 'No. of customers';
  shopDataCell02b.innerHTML = 'No. of cups sold';
  shopDataCell03a.innerHTML = 'Lbs. used brewing coffee';
  shopDataCell03b.innerHTML = 'Lbs. of beans sold to go';

  shopDataCell04a.innerHTML = openTimes[0];
  shopDataCell04b.innerHTML = seatac.superTotalHourlyLbsBeans();
  shopDataCell05a.innerHTML = seatac.hourlyCust[0];
  shopDataCell05b.innerHTML = seatac.hourlyCups[0];
  shopDataCell06a.innerHTML = seatac.hourlyLbsFromCups[0];
  shopDataCell06b.innerHTML = seatac.hourlyLbsFromBeanSales[0];

  shopDataCell07a.innerHTML = openTimes[1];
  shopDataCell07b.innerHTML = seatac.superTotalHourlyLbsBeans();
  shopDataCell08a.innerHTML = seatac.hourlyCust[1];
  shopDataCell08b.innerHTML = seatac.hourlyCups[1];
  shopDataCell09a.innerHTML = seatac.hourlyLbsFromCups[1];
  shopDataCell09b.innerHTML = seatac.hourlyLbsFromBeanSales[1];

  shopDataCell10a.innerHTML = openTimes[2];
  shopDataCell10b.innerHTML = seatac.superTotalHourlyLbsBeans();
  shopDataCell11a.innerHTML = seatac.hourlyCust[2];
  shopDataCell11b.innerHTML = seatac.hourlyCups[2];
  shopDataCell12a.innerHTML = seatac.hourlyLbsFromCups[2];
  shopDataCell12b.innerHTML = seatac.hourlyLbsFromBeanSales[2];

  shopDataCell13a.innerHTML = openTimes[3];
  shopDataCell13b.innerHTML = seatac.superTotalHourlyLbsBeans();
  shopDataCell14a.innerHTML = seatac.hourlyCust[3];
  shopDataCell14b.innerHTML = seatac.hourlyCups[3];
  shopDataCell15a.innerHTML = seatac.hourlyLbsFromCups[3];
  shopDataCell15b.innerHTML = seatac.hourlyLbsFromBeanSales[3];

  // shopDataCell07.innerHTML = times[1];
  // shopDataCell08.innerHTML = seatac.cupsTotal();
  // shopDataCell09.innerHTML = seatac.lbsTotal();
  //
  // shopDataCell10.innerHTML = times[2];
  // shopDataCell11.innerHTML = seatac.cupsTotal();
  // shopDataCell12.innerHTML = seatac.lbsTotal();
  //
  // shopDataCell13.innerHTML = times[3];
  // shopDataCell14.innerHTML = seatac.cupsTotal();
  // shopDataCell15.innerHTML = seatac.lbsTotal();
  //
  // shopDataCell16.innerHTML = times[4];
  // shopDataCell17.innerHTML = seatac.cupsTotal();
  // shopDataCell18.innerHTML = seatac.lbsTotal();
  //
  // shopDataCell19.innerHTML = times[5];
  // shopDataCell20.innerHTML = pike.cupsTotal();
  // shopDataCell21.innerHTML = pike.lbsTotal();
  //
  // shopDataCell22.innerHTML = times[6];
  // shopDataCell23.innerHTML = pike.cupsTotal();
  // shopDataCell24.innerHTML = pike.lbsTotal();
  //
  // shopDataCell25.innerHTML = times[7];
  // shopDataCell26.innerHTML = pike.cupsTotal();
  // shopDataCell27.innerHTML = pike.lbsTotal();
  //
  // shopDataCell28.innerHTML = times[8];
  // shopDataCell29.innerHTML = pike.cupsTotal();
  // shopDataCell30.innerHTML = pike.lbsTotal();
  //
  // shopDataCell31.innerHTML = times[9];
  // shopDataCell32.innerHTML = pike.cupsTotal();
  // shopDataCell33.innerHTML = pike.lbsTotal();
  //
  // shopDataCell34.innerHTML = times[10];
  // shopDataCell35.innerHTML = pike.cupsTotal();
  // shopDataCell36.innerHTML = pike.lbsTotal();
  //
  // shopDataCell37.innerHTML = times[11];
  // shopDataCell38.innerHTML = pike.cupsTotal();
  // shopDataCell39.innerHTML = pike.lbsTotal();
  //
  // shopDataCell40.innerHTML = times[12];
  // shopDataCell41.innerHTML = pike.cupsTotal();
  // shopDataCell42.innerHTML = pike.lbsTotal();
  //
  // shopDataCell43.innerHTML = times[13];
  // shopDataCell44.innerHTML = pike.cupsTotal();
  // shopDataCell45.innerHTML = pike.lbsTotal();
  //
  // shopDataCell46.innerHTML = times[14];
  // shopDataCell47.innerHTML = pike.cupsTotal();
  // shopDataCell48.innerHTML = pike.lbsTotal();
}
insertSeaTacTable();

// function insertCaphillTable() {
//   var shopDataTable = document.getElementById('caphillData');
//   console.log(shopDataTable);
//
//   var shopDataRow01 = shopDataTable.insertRow(0);
//   var shopDataRow02 = shopDataTable.insertRow(1);
//   var shopDataRow03 = shopDataTable.insertRow(2);
//   var shopDataRow04 = shopDataTable.insertRow(3);
//   var shopDataRow05 = shopDataTable.insertRow(4);
//   var shopDataRow06 = shopDataTable.insertRow(5);
//   var shopDataRow07 = shopDataTable.insertRow(6);
//   var shopDataRow08 = shopDataTable.insertRow(7);
//   var shopDataRow09 = shopDataTable.insertRow(8);
//   var shopDataRow10 = shopDataTable.insertRow(9);
//   var shopDataRow11 = shopDataTable.insertRow(10);
//   var shopDataRow12 = shopDataTable.insertRow(11);
//   var shopDataRow13 = shopDataTable.insertRow(12);
//   var shopDataRow14 = shopDataTable.insertRow(13);
//   var shopDataRow15 = shopDataTable.insertRow(14);
//   var shopDataRow16 = shopDataTable.insertRow(15);
//
//   var shopDataCell01 = shopDataRow01.insertCell(0);
//   var randoCustomerTitle = shopDataRow01.insertCell(1);
//   var shopDataCell02 = shopDataRow01.insertCell(2);
//   var shopDataCell03 = shopDataRow01.insertCell(3);
//
//   var shopDataCell04 = shopDataRow02.insertCell(0);
//   var randoCustomer6am = shopDataRow02.insertCell(1);
//   var shopDataCell05 = shopDataRow02.insertCell(2);
//   var shopDataCell06 = shopDataRow02.insertCell(3);
//
//   var shopDataCell07 = shopDataRow03.insertCell(0);
//   var randoCustomer7am = shopDataRow03.insertCell(1);
//   var shopDataCell08 = shopDataRow03.insertCell(2);
//   var shopDataCell09 = shopDataRow03.insertCell(3);
//
//   var shopDataCell10 = shopDataRow04.insertCell(0);
//   var randoCustomer8am = shopDataRow04.insertCell(1);
//   var shopDataCell11 = shopDataRow04.insertCell(2);
//   var shopDataCell12 = shopDataRow04.insertCell(3);
//
//   var shopDataCell13 = shopDataRow05.insertCell(0);
//   var randoCustomer9am = shopDataRow05.insertCell(1);
//   var shopDataCell14 = shopDataRow05.insertCell(2);
//   var shopDataCell15 = shopDataRow05.insertCell(3);
//
//   var shopDataCell16 = shopDataRow06.insertCell(0);
//   var randoCustomer10am = shopDataRow06.insertCell(1);
//   var shopDataCell17 = shopDataRow06.insertCell(2);
//   var shopDataCell18 = shopDataRow06.insertCell(3);
//
//   var shopDataCell19 = shopDataRow07.insertCell(0);
//   var randoCustomer11am = shopDataRow07.insertCell(1);
//   var shopDataCell20 = shopDataRow07.insertCell(2);
//   var shopDataCell21 = shopDataRow07.insertCell(3);
//
//   var shopDataCell22 = shopDataRow08.insertCell(0);
//   var randoCustomer12pm = shopDataRow08.insertCell(1);
//   var shopDataCell23 = shopDataRow08.insertCell(2);
//   var shopDataCell24 = shopDataRow08.insertCell(3);
//
//   var shopDataCell25 = shopDataRow09.insertCell(0);
//   var randoCustomer1pm = shopDataRow09.insertCell(1);
//   var shopDataCell26 = shopDataRow09.insertCell(2);
//   var shopDataCell27 = shopDataRow09.insertCell(3);
//
//   var shopDataCell28 = shopDataRow10.insertCell(0);
//   var randoCustomer2pm = shopDataRow10.insertCell(1);
//   var shopDataCell29 = shopDataRow10.insertCell(2);
//   var shopDataCell30 = shopDataRow10.insertCell(3);
//
//   var shopDataCell31 = shopDataRow11.insertCell(0);
//   var randoCustomer3pm = shopDataRow11.insertCell(1);
//   var shopDataCell32 = shopDataRow11.insertCell(2);
//   var shopDataCell33 = shopDataRow11.insertCell(3);
//
//   var shopDataCell34 = shopDataRow12.insertCell(0);
//   var randoCustomer4pm = shopDataRow12.insertCell(1);
//   var shopDataCell35 = shopDataRow12.insertCell(2);
//   var shopDataCell36 = shopDataRow12.insertCell(3);
//
//   var shopDataCell37 = shopDataRow13.insertCell(0);
//   var randoCustomer5pm = shopDataRow13.insertCell(1);
//   var shopDataCell38 = shopDataRow13.insertCell(2);
//   var shopDataCell39 = shopDataRow13.insertCell(3);
//
//   var shopDataCell40 = shopDataRow14.insertCell(0);
//   var randoCustomer6pm = shopDataRow14.insertCell(1);
//   var shopDataCell41 = shopDataRow14.insertCell(2);
//   var shopDataCell42 = shopDataRow14.insertCell(3);
//
//   var shopDataCell43 = shopDataRow15.insertCell(0);
//   var randoCustomer7pm = shopDataRow15.insertCell(1);
//   var shopDataCell44 = shopDataRow15.insertCell(2);
//   var shopDataCell45 = shopDataRow15.insertCell(3);
//
//   var shopDataCell46 = shopDataRow16.insertCell(0);
//   var randoCustomer8pm = shopDataRow16.insertCell(1);
//   var shopDataCell47 = shopDataRow16.insertCell(2);
//   var shopDataCell48 = shopDataRow16.insertCell(3);
//
//   shopDataCell01.innerHTML = 'Time of day';
//   randoCustomerTitle.innerHTML = 'Number of customers';
//   shopDataCell02.innerHTML = 'Cups consumed';
//   shopDataCell03.innerHTML = 'Pounds bought';
//
//   shopDataCell04.innerHTML = times[0];
//   randoCustomer6am.innerHTML = caphill.randCust();
//   shopDataCell05.innerHTML = caphill.cupsTotal();
//   shopDataCell06.innerHTML = caphill.lbsTotal();
//
//   shopDataCell07.innerHTML = times[1];
//   randoCustomer7am.innerHTML = caphill.randCust();
//   shopDataCell08.innerHTML = caphill.cupsTotal();
//   shopDataCell09.innerHTML = caphill.lbsTotal();
//
//   shopDataCell10.innerHTML = times[2];
//   randoCustomer8am.innerHTML = caphill.randCust();
//   shopDataCell11.innerHTML = caphill.cupsTotal();
//   shopDataCell12.innerHTML = caphill.lbsTotal();
//
//   shopDataCell13.innerHTML = times[3];
//   randoCustomer9am.innerHTML = caphill.randCust();
//   shopDataCell14.innerHTML = caphill.cupsTotal();
//   shopDataCell15.innerHTML = caphill.lbsTotal();
//
//   shopDataCell16.innerHTML = times[4];
//   randoCustomer10am.innerHTML = caphill.randCust();
//   shopDataCell17.innerHTML = caphill.cupsTotal();
//   shopDataCell18.innerHTML = caphill.lbsTotal();
//
//   shopDataCell19.innerHTML = times[5];
//   randoCustomer11am.innerHTML = caphill.randCust();
//   shopDataCell20.innerHTML = caphill.cupsTotal();
//   shopDataCell21.innerHTML = caphill.lbsTotal();
//
//   shopDataCell22.innerHTML = times[6];
//   randoCustomer12pm.innerHTML = caphill.randCust();
//   shopDataCell23.innerHTML = caphill.cupsTotal();
//   shopDataCell24.innerHTML = caphill.lbsTotal();
//
//   shopDataCell25.innerHTML = times[7];
//   randoCustomer1pm.innerHTML = caphill.randCust();
//   shopDataCell26.innerHTML = caphill.cupsTotal();
//   shopDataCell27.innerHTML = caphill.lbsTotal();
//
//   shopDataCell28.innerHTML = times[8];
//   randoCustomer2pm.innerHTML = caphill.randCust();
//   shopDataCell29.innerHTML = caphill.cupsTotal();
//   shopDataCell30.innerHTML = caphill.lbsTotal();
//
//   shopDataCell31.innerHTML = times[9];
//   randoCustomer3pm.innerHTML = caphill.randCust();
//   shopDataCell32.innerHTML = caphill.cupsTotal();
//   shopDataCell33.innerHTML = caphill.lbsTotal();
//
//   shopDataCell34.innerHTML = times[10];
//   randoCustomer4pm.innerHTML = caphill.randCust();
//   shopDataCell35.innerHTML = caphill.cupsTotal();
//   shopDataCell36.innerHTML = caphill.lbsTotal();
//
//   shopDataCell37.innerHTML = times[11];
//   randoCustomer5pm.innerHTML = caphill.randCust();
//   shopDataCell38.innerHTML = caphill.cupsTotal();
//   shopDataCell39.innerHTML = caphill.lbsTotal();
//
//   shopDataCell40.innerHTML = times[12];
//   randoCustomer6pm.innerHTML = caphill.randCust();
//   shopDataCell41.innerHTML = caphill.cupsTotal();
//   shopDataCell42.innerHTML = caphill.lbsTotal();
//
//   shopDataCell43.innerHTML = times[13];
//   randoCustomer7pm.innerHTML = caphill.randCust();
//   shopDataCell44.innerHTML = caphill.cupsTotal();
//   shopDataCell45.innerHTML = caphill.lbsTotal();
//
//   shopDataCell46.innerHTML = times[14];
//   randoCustomer8pm.innerHTML = caphill.randCust();
//   shopDataCell47.innerHTML = caphill.cupsTotal();
//   shopDataCell48.innerHTML = caphill.lbsTotal();
// }
// insertCaphillTable();

var paragraphEl = document.createElement('p');
var tableShellEl = document.createElement('table');
var tableDataEl = document.createElement('td');

/* this takes data from the object and places it in an element created for that data on the html document */
// paragraphEl.textContent = pike.lbsCust;
// document.body.appendChild(paragraphEl);
console.log(paragraphEl.innerHTML);
