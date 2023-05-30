//comment js: vs->ctrl+/
// alert('Hello world!');
// console.log("Hello world!");
/*comment nhiều dòng
comment
*/

// let name = "John";
// var age =19;

// console.log('Name: ' + name + '. Age: ' + age);

// name = "Jame";

// alert(name);

// tính diện tích hình tròn: pi * r * r: r: bán kính

let dt1 = Math.PI * 5 * 5;
console.log("Dien tich hinh tron co ban kinh 5 la: " + dt1);

let dt2 = Math.PI * 10 * 10;
console.log("Dien tich hinh tron co ban kinh 10 la: " + dt2);

//r là tham số -> thay đổi được
function calculateArea(r) {
  let area = Math.PI * r * r;
  console.log("Dien tich hinh tron co ban kinh " + r + " la: " + area);
}

calculateArea(5);
calculateArea(10);
calculateArea(15);

function areaRectangle(a, b) {
  return a * b;
}

let dt3 = areaRectangle(2, 3);
console.log(dt3);
alert(dt3);
