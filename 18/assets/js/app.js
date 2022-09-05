

// while (true){
//   alert('Где мои деньги')
// }






// string -> number
// +, parseInt, parseFloat
// number -> string
// toString()
// string/nubmer -> Bool
// Boolean(a)
// string -> Array
// Array.from(a)
//string -> Object
//JSON.parse
//Object -> string
//JSON.stringify
//Array -> string
//join('')






// const isDelete = confirm('Delete item?');
// console.log(isDelete);

// вірні змінні
let name, surname, name2, surname2;
name = 'Vitaliy';
surname = 'Zubarev';
name2 = 'Igor';
surname2 = 'Yalobenko';

console.log('name', 'surname', 'name2', 'surname2')

// let 1name, 1surname, one-name, one-surname, 3name; 



name = prompt('Як тебе звати?',);

alert(`Привіт ${name}`); 


let dateBirthday = prompt('В якому році народився?',);
alert(`Ваш рік народження ${dateBirthday}`);

let currentYear = 2022
let age = dateBirthday - currentYear


 
if (typeof age === 'string') {
    console.log('Variable is a string');
}
else {
    console.log('Variable is not a string');
}



console.log(age)





let course = 0;
$.ajax({
   type: 'get',
   url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange',
   dataType: 'xml',
   success: function(response) {
        $(response).find("currency").each(function(i,elem) {
           if($(elem).find('cc').text() == 'USD') { 
              course = +$(elem).find('rate').text();
           }
           if($(elem).find('cc').text() == 'EUR') { 
              course1 = +$(elem).find('rate').text();
           }
            { 
              data = $(elem).find('exchangedate').text();
            }
     })   
  }
});
$('input').on('keyup',function(){
 let value1, value3, value4, value5;
 value1 = parseFloat($('#val1').val()).toFixed(2);
 value3 = parseFloat($('#val3').val()).toFixed(2);
 value4 = parseFloat($('#val4').val()).toFixed(2);
 value5 = parseFloat($('#val5').val()).toFixed(2);

 
 $('#rezultat1').val(data);
   $('#rezultat2').val(value3 / course);
   $('#rezultat').val(value1 * course);
   $('#rezultat4').val(value4 / course1);
   $('#rezultat5').val(value5 * course1);
         
       
        
});