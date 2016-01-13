// My javascript lives in here
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

// Parent constructor object for coffee shop locations
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

var pike = new CoffeeShop('Pike Place Market', 14, 55, 1.2, 3.7);

var seatac = new CoffeeShop('SeaTac Airport', 68, 124, 1.1, 2.7);

// Code below if I just wanted to embed the table in the page.
// slu.displayShopDataTable();
