  /*------------Task 1--------------*/
let age = prompt('How old are you?', 0);
    if (age >= 0 && age < 12)
    {
        console.log('You are a child');
    }
    else if (age >= 12 && age < 18)
    {
        console.log('You are a teenager');
    }
    else if (age >= 18 && age < 60)
    {
        console.log('You are an adult');
    }
    else if (age >= 60)
    {
        console.log('You are an retired');
    }



  /*------------Task 2--------------*/
let number = prompt('Enter the number from 0 to 9', 0);
    switch(number) {
        case '0':
            console.log('0 is )');
            break;
        case '1':
            console.log('1 is !');
            break;
        case '2':
            console.log('2 is @');
            break;
        case '3':
            console.log('3 is #');
            break;
        case '4':
            console.log('4 is $');
            break;
        case '5':
            console.log('5 is %');
            break;
        case '6':
            console.log('6 is ^');
            break;
        case '7':
            console.log('7 is &');
            break;
        case '8':
            console.log('8 is *');
            break;
        case '9':
            console.log('9 is (');
            break;
    }

 /*------------Task 3--------------*/
let a = Number(prompt("введіть початок діапазону",""));
let n = Number(prompt("введіть кінець діапазону",""));
let sum = 0;
    while(a <= n){       
           sum+=a;  
           a++;
        }
    alert(sum);
      /*------------Task 4--------------*/
const nod = (n, m) => {
    if (m !== 0) {
        const k = n % m;
        return nod(m, k);
    }
        return n;
      };
      
      alert('Введіть 2 числа, щоб знайти НОД')
      let numb1 = prompt('Введіть перше число');
      let numb2 = prompt('Введіть друге число');
      alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + nod(numb1, numb2));
  /*------------Task 5--------------*/

let number4 = Number(prompt("введіть число",""));
    for (let i=1; i<=number; i++) {
        if (number%i==0 && number==!number && number==!1) {
        console.log(i);
        }
    }
        
  /*------------Task 6--------------*/
let number3 = prompt('Enter the number from 10000 to 99999', 0);
    number = number + '';
    if (number === number.split('').reverse().join(''))
        alert('palindrome');
    else
        alert('NOT palindrome');


        /*------------Task 7--------------*/
let amount = prompt('Enter the value of purchase:');
if (amount >=200 && amount < 300)
    alert(amount/100*97 + '$ with 3% discount');
else if (amount >=300 && amount < 500)
    alert(amount/100*95 + '$ with 5% discount');
else if (amount >=500)
    alert(amount/100*93 + '$ with 7% discount');

        /*------------Task 8--------------*/
let arr = prompt('введить 10 чисел через пробел').split` `;
let positive = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 1).length,
	negative = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == -1).length,
	loyal = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 0).length;

if(positive) alert('Положительных: ' + positive);
if(negative) alert('Отрицательных: ' + negative);
if(loyal) alert('Нулей: ' + loyal);

 /*------------Task 9--------------*/
 const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятница', 'Субота', 'Неділя'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хочеш побачити наступний день? `)) {
  currDay = (currDay + 1) % days.length;
}

/*------------Task 10--------------*/