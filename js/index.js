/* 1. Определите переменные со значениями
11, true, "java script", "100" и выведите их в консоль */

/* 
let a=11, b=true, c='java script', d='100';
console.log(a,b,c,d);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
 */

/* 2. Создайте переменные greeting со значением'Hello, ' и userName.
Спросите имя пользователя и занесите данное значение в переменную userName.
С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'. */

/* 
let greeting='Hello, ',userName=prompt('Введите свое имя');
alert(greeting+userName+('!'));
 */

/* 3. Определите в какую четверть часа попадает ввыденное количество минут пользователем
(например, 40 минут - 3-я четверть часа) */

/* //! 3.1
let hmmn=prompt('Сколько сейчас минут?');
if(hmmn<0){
    alert('Введи правильно!!');
} else if(hmmn<=15){
    alert('1-я четверть часа');
} else if(hmmn<=30){
    alert('2-я четверть часа');
} else if(hmmn<=45){
    alert('3-я четверть часа');
} else if(hmmn<=60){
    alert('4-я четверть часа');
} else {
    alert('Введи правильно!!');
} */


/* //!3.2
let hmmn;
while(true){
    hmmn=prompt('Сколько сейчас минут?');
    if(hmmn<0 || hmmn>60){
        alert('Введи правильно!!');
    } else if(hmmn<=15){
        alert('1-я четверть часа');
        break;
    } else if(hmmn<=30){
        alert('2-я четверть часа');
        break;
    } else if(hmmn<=45){
        alert('3-я четверть часа');
        break;
    } else if(hmmn<=60){
        alert('4-я четверть часа');
        break;
    } else;
        alert('Введи правильно!!');
}
 */


/* 4. Вывод чисел от 10 до 50, которые кратны 5 */

/*//!4.1
let num=10;

for(num;num<=50;num++){
    if(num%5==0){
        console.log(num)
    }
}


//!4.2
num=9;
while(num<=50){
    num++;
    if (num%5==0){
        console.log(num)
    }
}
 */


/* 5. Найти произведение чисел в пределах от lim1 до lim2 
(например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12). */






/* Дополнительное задание
Оформите задания 1-5 в виде функций и напишите меню по вызову задания */

// Доп-1
function showInConsole(){
    let a=11, b=true, c='java script', d='100';
    console.log(a,b,c,d);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
//showInConsole();


//Доп-2
function greetingFunction(){
    let greeting='Hello, ',userName=prompt('Введите свое имя');
    alert(greeting+userName+('!'));
}
//greetingFunction();


//Доп-3
function hmmnFunction(){
    let hmmn;
    while(true){
        hmmn=prompt('Сколько сейчас минут?');
        if(hmmn<0 || hmmn>60){
            alert('Введи правильно!!');
        } else if(hmmn<=15){
            alert('1-я четверть часа');
            break;
        } else if(hmmn<=30){
            alert('2-я четверть часа');
            break;
        } else if(hmmn<=45){
            alert('3-я четверть часа');
            break;
        } else if(hmmn<=60){
            alert('4-я четверть часа');
            break;
        } else;
            alert('Введи правильно!!');
    }
}
//hmmnFunction();

//Доп-4
function outputOfNumbers(){
    let num=10;
    for(num;num<=50;num++){
        if(num%5==0){
            console.log(num)
        }
    }
}
//outputOfNumbers();



/* 
let menu=prompt('1=з№1 2=з№2 3=з№3 4=з№4');
switch(menu){
    case '1':showInConsole(); break;
    case '2':greetingFunction(); break;
    case '3':hmmnFunction(); break;
    case '4':outputOfNumbers(); break;
    default:alert('Нет такого значения:-/')
}
 */


function dropMenu(){
    let menu=prompt('1=з№1 2=з№2 3=з№3 4=з№4');
    switch(menu){
        case '1':showInConsole(); break;
        case '2':greetingFunction(); break;
        case '3':hmmnFunction(); break;
        case '4':outputOfNumbers(); break;
        default:alert('Нет такого значения:-/');dropMenu();
    }
}
dropMenu();