const a = 0.1;
const b = 0.2;

const c = a + b;
console.log((c).toFixed(1));

// console.log ((0.1 + 0.2).toFixed(1));

const y = 2;
const g = + ('1');
const t = g + y;

console.log(t);

let memoryFlesh =  Number.parseInt(prompt('Ввести обєм флешки в гб'));
let filesX = 820;

let u = filesX / 1024;
let sum = memoryFlesh / u;

console.log(sum);


let money = Number.parseFloat(prompt('Гроші користувача'));
let shoko = Number.parseFloat(prompt('Ціна шоколадок'));
let sdacha;
let kolvo;
console.log(shoko);

if (money < shoko){
    console.log('no money');
}
else {
    sdacha = money % shoko;
    kolvo = money / shoko;
    console.log(sdacha + ' сдача ', kolvo + ' кол-во');
}


let userDigit = Number.parseInt(prompt('Гроші користувача'));
    if(userDigit >=1){
        let lastDigit = '';
        let digitResult = '' ;
        while (userDigit > 0){
            lastDigit = userDigit % 10; //4
            userDigit = Math.floor(userDigit / 10); //2
            digitResult = digitResult + lastDigit;
        }
        console.log(digitResult);
    }
    else {
        console.log(userDigit);
    }


    const userMonths = Number.parseInt(prompt('Місяць'));;
    const userYearPercent = Number.parseInt(prompt('Процент'));
    const userInvestment = Number.parseInt(prompt('Інвестиції'));

    if (userInvestment > 0){

    const interestResult = userInvestment / 100 * userYearPercent / 12 * userMonths; 

    const incomeResult = interestResult + userInvestment;

    console.log(incomeResult);
}

else if(isNaN(userInvestment)){
    console.log(userInvestment);

}