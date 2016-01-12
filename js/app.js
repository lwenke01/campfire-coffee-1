// My javascript lives in here
// OBJECT LITERALS
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
var times = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm',];

// Objects for coffee store locations
// Build just one for starters
var pike = {
  maxCust: 55,
  minCust: 15,
  randCust: function() {
    return Math.floor(Math.random() * (pike.maxCust - pike.minCust + 1) + pike.minCust);
  },
  cupsCust: 1.2,
  lbsCust: 3.7,
  cupsTotal: function() {
    return Math.round(1.2 * pike.randCust());
  },
  lbsTotal: function() {
    return Math.round(3.7 * pike.randCust());
  }
};
console.log(pike.randCust());
console.log(pike.cupsTotal());
console.log(pike.lbsTotal());

var caphill = {
  maxCust: 32,
  minCust: 48,
  randCust: function() {
    return Math.floor(Math.random() * (caphill.maxCust - caphill.minCust + 1) + caphill.minCust);
  },
  cupsCust: 3.2,
  lbsCust: 3.7,
  cupsTotal: function() {
    return Math.round(1.2 * caphill.randCust());
  },
  lbsTotal: function() {
    return Math.round(3.7 * caphill.randCust());
  }
};
console.log(caphill.randCust());

var publibrary = {
  maxCust: 49,
  minCust: 75,
  randCust: function() {
    return Math.floor(Math.random() * (publibrary.maxCust - publibrary.minCust + 1) + publibrary.minCust);
  },
  cupsCust: 2.6,
  lbsCust: 0.2
};
console.log(publibrary.randCust());

// BUILD OUT LATER
// var slu = {
//   maxCust: 1,
//   minCust: 1,
//   cupsCust: 1,
//   lbsCust: 1,
// };
// var seatac = {
//   maxCust: 1,
//   minCust: 1,
//   cupsCust: 1,
//   lbsCust: 1,
// };
// var web = {
//   maxCust: 1,
//   minCust: 1,
//   cupsCust: 1,
//   lbsCust: 1,
// };

function insertPikeTable() {
  var shopDataTable = document.getElementById('pikeData');
  console.log(shopDataTable);

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

  var shopDataCell01 = shopDataRow01.insertCell(0);
  var shopDataCell02 = shopDataRow01.insertCell(1);
  var shopDataCell03 = shopDataRow01.insertCell(2);

  var shopDataCell04 = shopDataRow02.insertCell(0);
  var shopDataCell05 = shopDataRow02.insertCell(1);
  var shopDataCell06 = shopDataRow02.insertCell(2);

  var shopDataCell07 = shopDataRow03.insertCell(0);
  var shopDataCell08 = shopDataRow03.insertCell(1);
  var shopDataCell09 = shopDataRow03.insertCell(2);

  var shopDataCell10 = shopDataRow04.insertCell(0);
  var shopDataCell11 = shopDataRow04.insertCell(1);
  var shopDataCell12 = shopDataRow04.insertCell(2);

  var shopDataCell13 = shopDataRow05.insertCell(0);
  var shopDataCell14 = shopDataRow05.insertCell(1);
  var shopDataCell15 = shopDataRow05.insertCell(2);

  var shopDataCell16 = shopDataRow06.insertCell(0);
  var shopDataCell17 = shopDataRow06.insertCell(1);
  var shopDataCell18 = shopDataRow06.insertCell(2);

  var shopDataCell19 = shopDataRow07.insertCell(0);
  var shopDataCell20 = shopDataRow07.insertCell(1);
  var shopDataCell21 = shopDataRow07.insertCell(2);

  var shopDataCell22 = shopDataRow08.insertCell(0);
  var shopDataCell23 = shopDataRow08.insertCell(1);
  var shopDataCell24 = shopDataRow08.insertCell(2);

  var shopDataCell25 = shopDataRow09.insertCell(0);
  var shopDataCell26 = shopDataRow09.insertCell(1);
  var shopDataCell27 = shopDataRow09.insertCell(2);

  var shopDataCell28 = shopDataRow10.insertCell(0);
  var shopDataCell29 = shopDataRow10.insertCell(1);
  var shopDataCell30 = shopDataRow10.insertCell(2);

  var shopDataCell31 = shopDataRow11.insertCell(0);
  var shopDataCell32 = shopDataRow11.insertCell(1);
  var shopDataCell33 = shopDataRow11.insertCell(2);

  var shopDataCell34 = shopDataRow12.insertCell(0);
  var shopDataCell35 = shopDataRow12.insertCell(1);
  var shopDataCell36 = shopDataRow12.insertCell(2);

  var shopDataCell37 = shopDataRow13.insertCell(0);
  var shopDataCell38 = shopDataRow13.insertCell(1);
  var shopDataCell39 = shopDataRow13.insertCell(2);

  var shopDataCell40 = shopDataRow14.insertCell(0);
  var shopDataCell41 = shopDataRow14.insertCell(1);
  var shopDataCell42 = shopDataRow14.insertCell(2);

  var shopDataCell43 = shopDataRow15.insertCell(0);
  var shopDataCell44 = shopDataRow15.insertCell(1);
  var shopDataCell45 = shopDataRow15.insertCell(2);

  var shopDataCell46 = shopDataRow16.insertCell(0);
  var shopDataCell47 = shopDataRow16.insertCell(1);
  var shopDataCell48 = shopDataRow16.insertCell(2);

  shopDataCell01.innerHTML = 'Time of day';
  shopDataCell02.innerHTML = 'Cups consumed';
  shopDataCell03.innerHTML = 'Pounds bought';

  shopDataCell04.innerHTML = times[0];
  shopDataCell05.innerHTML = pike.cupsTotal();
  shopDataCell06.innerHTML = pike.lbsTotal();

  shopDataCell07.innerHTML = times[1];
  shopDataCell08.innerHTML = pike.cupsTotal();
  shopDataCell09.innerHTML = pike.lbsTotal();

  shopDataCell10.innerHTML = times[2];
  shopDataCell11.innerHTML = pike.cupsTotal();
  shopDataCell12.innerHTML = pike.lbsTotal();

  shopDataCell13.innerHTML = times[3];
  shopDataCell14.innerHTML = pike.cupsTotal();
  shopDataCell15.innerHTML = pike.lbsTotal();

  shopDataCell16.innerHTML = times[4];
  shopDataCell17.innerHTML = pike.cupsTotal();
  shopDataCell18.innerHTML = pike.lbsTotal();

  shopDataCell19.innerHTML = times[5];
  shopDataCell20.innerHTML = pike.cupsTotal();
  shopDataCell21.innerHTML = pike.lbsTotal();

  shopDataCell22.innerHTML = times[6];
  shopDataCell23.innerHTML = pike.cupsTotal();
  shopDataCell24.innerHTML = pike.lbsTotal();

  shopDataCell25.innerHTML = times[7];
  shopDataCell26.innerHTML = pike.cupsTotal();
  shopDataCell27.innerHTML = pike.lbsTotal();

  shopDataCell28.innerHTML = times[8];
  shopDataCell29.innerHTML = pike.cupsTotal();
  shopDataCell30.innerHTML = pike.lbsTotal();

  shopDataCell31.innerHTML = times[9];
  shopDataCell32.innerHTML = pike.cupsTotal();
  shopDataCell33.innerHTML = pike.lbsTotal();

  shopDataCell34.innerHTML = times[10];
  shopDataCell35.innerHTML = pike.cupsTotal();
  shopDataCell36.innerHTML = pike.lbsTotal();

  shopDataCell37.innerHTML = times[11];
  shopDataCell38.innerHTML = pike.cupsTotal();
  shopDataCell39.innerHTML = pike.lbsTotal();

  shopDataCell40.innerHTML = times[12];
  shopDataCell41.innerHTML = pike.cupsTotal();
  shopDataCell42.innerHTML = pike.lbsTotal();

  shopDataCell43.innerHTML = times[13];
  shopDataCell44.innerHTML = pike.cupsTotal();
  shopDataCell45.innerHTML = pike.lbsTotal();

  shopDataCell46.innerHTML = times[14];
  shopDataCell47.innerHTML = pike.cupsTotal();
  shopDataCell48.innerHTML = pike.lbsTotal();
}
insertPikeTable();

function insertCaphillTable() {
  var shopDataTable = document.getElementById('caphillData');
  console.log(shopDataTable);

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

  var shopDataCell01 = shopDataRow01.insertCell(0);
  var shopDataCell02 = shopDataRow01.insertCell(1);
  var shopDataCell03 = shopDataRow01.insertCell(2);

  var shopDataCell04 = shopDataRow02.insertCell(0);
  var shopDataCell05 = shopDataRow02.insertCell(1);
  var shopDataCell06 = shopDataRow02.insertCell(2);

  var shopDataCell07 = shopDataRow03.insertCell(0);
  var shopDataCell08 = shopDataRow03.insertCell(1);
  var shopDataCell09 = shopDataRow03.insertCell(2);

  var shopDataCell10 = shopDataRow04.insertCell(0);
  var shopDataCell11 = shopDataRow04.insertCell(1);
  var shopDataCell12 = shopDataRow04.insertCell(2);

  var shopDataCell13 = shopDataRow05.insertCell(0);
  var shopDataCell14 = shopDataRow05.insertCell(1);
  var shopDataCell15 = shopDataRow05.insertCell(2);

  var shopDataCell16 = shopDataRow06.insertCell(0);
  var shopDataCell17 = shopDataRow06.insertCell(1);
  var shopDataCell18 = shopDataRow06.insertCell(2);

  var shopDataCell19 = shopDataRow07.insertCell(0);
  var shopDataCell20 = shopDataRow07.insertCell(1);
  var shopDataCell21 = shopDataRow07.insertCell(2);

  var shopDataCell22 = shopDataRow08.insertCell(0);
  var shopDataCell23 = shopDataRow08.insertCell(1);
  var shopDataCell24 = shopDataRow08.insertCell(2);

  var shopDataCell25 = shopDataRow09.insertCell(0);
  var shopDataCell26 = shopDataRow09.insertCell(1);
  var shopDataCell27 = shopDataRow09.insertCell(2);

  var shopDataCell28 = shopDataRow10.insertCell(0);
  var shopDataCell29 = shopDataRow10.insertCell(1);
  var shopDataCell30 = shopDataRow10.insertCell(2);

  var shopDataCell31 = shopDataRow11.insertCell(0);
  var shopDataCell32 = shopDataRow11.insertCell(1);
  var shopDataCell33 = shopDataRow11.insertCell(2);

  var shopDataCell34 = shopDataRow12.insertCell(0);
  var shopDataCell35 = shopDataRow12.insertCell(1);
  var shopDataCell36 = shopDataRow12.insertCell(2);

  var shopDataCell37 = shopDataRow13.insertCell(0);
  var shopDataCell38 = shopDataRow13.insertCell(1);
  var shopDataCell39 = shopDataRow13.insertCell(2);

  var shopDataCell40 = shopDataRow14.insertCell(0);
  var shopDataCell41 = shopDataRow14.insertCell(1);
  var shopDataCell42 = shopDataRow14.insertCell(2);

  var shopDataCell43 = shopDataRow15.insertCell(0);
  var shopDataCell44 = shopDataRow15.insertCell(1);
  var shopDataCell45 = shopDataRow15.insertCell(2);

  var shopDataCell46 = shopDataRow16.insertCell(0);
  var shopDataCell47 = shopDataRow16.insertCell(1);
  var shopDataCell48 = shopDataRow16.insertCell(2);

  shopDataCell01.innerHTML = 'Time of day';
  shopDataCell02.innerHTML = 'Cups consumed';
  shopDataCell03.innerHTML = 'Pounds bought';

  shopDataCell04.innerHTML = times[0];
  shopDataCell05.innerHTML = caphill.cupsTotal();
  shopDataCell06.innerHTML = caphill.lbsTotal();

  shopDataCell07.innerHTML = times[1];
  shopDataCell08.innerHTML = caphill.cupsTotal();
  shopDataCell09.innerHTML = caphill.lbsTotal();

  shopDataCell10.innerHTML = times[2];
  shopDataCell11.innerHTML = caphill.cupsTotal();
  shopDataCell12.innerHTML = caphill.lbsTotal();

  shopDataCell13.innerHTML = times[3];
  shopDataCell14.innerHTML = caphill.cupsTotal();
  shopDataCell15.innerHTML = caphill.lbsTotal();

  shopDataCell16.innerHTML = times[4];
  shopDataCell17.innerHTML = caphill.cupsTotal();
  shopDataCell18.innerHTML = caphill.lbsTotal();

  shopDataCell19.innerHTML = times[5];
  shopDataCell20.innerHTML = caphill.cupsTotal();
  shopDataCell21.innerHTML = caphill.lbsTotal();

  shopDataCell22.innerHTML = times[6];
  shopDataCell23.innerHTML = caphill.cupsTotal();
  shopDataCell24.innerHTML = caphill.lbsTotal();

  shopDataCell25.innerHTML = times[7];
  shopDataCell26.innerHTML = caphill.cupsTotal();
  shopDataCell27.innerHTML = caphill.lbsTotal();

  shopDataCell28.innerHTML = times[8];
  shopDataCell29.innerHTML = caphill.cupsTotal();
  shopDataCell30.innerHTML = caphill.lbsTotal();

  shopDataCell31.innerHTML = times[9];
  shopDataCell32.innerHTML = caphill.cupsTotal();
  shopDataCell33.innerHTML = caphill.lbsTotal();

  shopDataCell34.innerHTML = times[10];
  shopDataCell35.innerHTML = caphill.cupsTotal();
  shopDataCell36.innerHTML = caphill.lbsTotal();

  shopDataCell37.innerHTML = times[11];
  shopDataCell38.innerHTML = caphill.cupsTotal();
  shopDataCell39.innerHTML = caphill.lbsTotal();

  shopDataCell40.innerHTML = times[12];
  shopDataCell41.innerHTML = caphill.cupsTotal();
  shopDataCell42.innerHTML = caphill.lbsTotal();

  shopDataCell43.innerHTML = times[13];
  shopDataCell44.innerHTML = caphill.cupsTotal();
  shopDataCell45.innerHTML = caphill.lbsTotal();

  shopDataCell46.innerHTML = times[14];
  shopDataCell47.innerHTML = caphill.cupsTotal();
  shopDataCell48.innerHTML = caphill.lbsTotal();
}
insertCaphillTable();

var paragraphEl = document.createElement('p');
var tableShellEl = document.createElement('table');
var tableDataEl = document.createElement('td');

/* this takes data from the object and places it in an element created for that data on the html document */
paragraphEl.textContent = pike.lbsCust;
// document.body.appendChild(paragraphEl);
console.log(paragraphEl.innerHTML);
