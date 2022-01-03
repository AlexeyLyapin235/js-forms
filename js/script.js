

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачу:
*/
/*
- Создайте форму и отработайте на ней все события и методы из этого урока
- Добавьте к текстовым полям формы валидацию заполнения полей
и счетчик символов
- Запретите вставку текста в объект textarea этой формы
*/




//========================================================================================================================================================
//========================================================================================================================================================


// Свойства и методы форм

// Коллекция всех форм на странице
// document.forms

// Получить коллекцию всех форм на странице
// console.log(document.forms);


// Получить конкретную форму на странице
/*
const mainForm = document.forms[0];
console.log(mainForm);
*/

// Атрибут name
/*
const mainForm = document.forms.main;
console.log(mainForm);
*/

//----

// Разница между document.forms и document.querySelectorAll('form');

/*
// Коллекция
console.log(document.querySelectorAll('form'));
// Живая коллекции
console.log(document.forms);


// Добавление новой формы
document.body.insertAdjacentHTML(
	"beforeend",
	`<form name="some" class="some-form" action="#"></form>`
);
*/

//====================================

// document.forms.elements

//const mainForm = document.forms.main;
//console.log(mainForm.elements);

/*
// Получаем элемент с именем nameInput
const mainFormInput = mainForm.elements.nameInput;
// или mainForm.nameInput
console.log(mainFormInput);
*/
/*
// Получаем коллекцию с именем nameRadio
const mainFormRadioButtons = mainForm.nameRadio;
// или mainForm.elements.nameRadio
console.log(mainFormRadioButtons);
*/

// Обратная ссылка
// element.form

// Получаем форму элемента
//console.log(mainFormInput.form);

//---------------

// Элементы форм

// Работа с input и textarea
/*
Значение можно получить через свойство input.value(строка)
или input.checked(булево значение) для чекбоксов и радиокнопок.
*/

//const mainForm = document.forms.main;

/*
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;
*/
/*
// Получить значение (седержимое) поля
console.log(mainFormInput.value);
// Получить значение (седержимое) текстового поля
console.log(mainFormTextarea.value);
*/

/*
// Присвоить значение (седержимое) поля
mainFormInput.value = "Пока";
// Присвоить значение (седержимое) текстового поля
mainFormTextarea.value = "До встречи!";
*/

/*
const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;
*/

// Получить значение поля type radio
/*
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);
*/

// Получить значение поля type checkbox
/*
console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);
*/

// Получить значение поля type file
//console.log(mainFormFile.value);


// Назначить значение поля type radio
/*
mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = true;
*/

// Назначить значение поля type checkbox
/*
mainFormCheckBox.value = "save";
mainFormCheckBox.checked = true;
*/

// Назначить значение поля type file
//mainFormFile.value = "";

//---------------

// Работа с select и option

/*
Элемент <select> имеет 3 важных свойства:
select.options – коллекция из подэлементов <option>,
select.value – значение выбранного в данный момент <option>,
select.selectedIndex – номер выбранного <option>.

Они дают три разных способа установить значение в <select>:
Найти соответствующий элемент <option> и установить
в option.selected значение true.
Установить в select.value значение нужного <option>.
Установить в select.selectedIndex номер нужного <option>.

Первый способ наиболее понятный,
но (2) и (3) являются более удобными при работе.
*/


/*

const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Получить все options
console.log(mainFormSelect.options);

// Получить индекс выбранного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);
// Получить значение выбранного option
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);
// Получить текст выбранного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);
*/


// Выбрать некий option
// mainFormSelect.options[1].selected = true;
// mainFormSelect.selectedIndex = 1;
// mainFormSelect.value = 2;


/*
Параметры:
text – текст внутри <option>,
value – значение,
defaultSelected – если true, то ставится HTML - атрибут selected,
selected – если true, то элемент <option> будет выбранным.

Тут может быть небольшая путаница с defaultSelected и selected.
Всё просто: defaultSelected задаёт HTML - атрибут,
его можно получить как option.getAttribute('selected'),
а selected – выбрано значение или нет,
именно его важно поставить правильно.
Впрочем, обычно ставят оба этих значения
в true или не ставят вовсе(т.е.false).
*/

/*
Элементы <option> имеют свойства:
//Выбрана ли опция.
option.selected
//Номер опции среди других в списке <select>.
option.index
//Содержимое опции (то, что видит посетитель).
option.text
*/


// Добавить новую опцию
// new Option
// option = new Option(text, value, defaultSelected, selected);

/*
Параметры:
text – текст внутри < option >,
value – значение,
defaultSelected – если true, то ставится HTML - атрибут selected,
selected – если true, то элемент < option > будет выбранным.
*/

// Пример
/*
let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);
*/

/*
Элементы <option> имеют свойства:
//Выбрана ли опция.
option.selected
//Номер опции среди других в списке <select>.
option.index
//Содержимое опции (то, что видит посетитель).
option.text
*/


//---

/*
// Мультивыбор

// получаем все выбранные значения из select с multiple
let selectedOptions = Array.from(mainFormSelect.options)
	.filter(option => option.selected)
	.map(option => option.value);

console.log(selectedOptions);
*/

//=============================================

// События форм и их элементов

// Фокусировка focus и blur
/*
Элемент получает фокус (focus), когда пользователь кликает по нему
или использует клавишу Tab.
Также существует HTML - атрибут autofocus, который устанавливает
фокус на элемент, когда страница загружается.
Есть и другие способы получения фокуса.

Фокусировка обычно означает:
«приготовься к вводу данных на этом элементе»,
это хороший момент, чтобы инициализовать или загрузить что-нибудь.

Момент потери фокуса (blur) - это момент,
когда пользователь кликает куда-то ещё или нажимает Tab,
чтобы переключиться на следующее поле формы.
Есть другие причины потери фокуса.

В момент события "потеря фокуса" мы можем выполнить
проверку введённых данных или даже отправить
эти данные на сервер и так далее.
*/

// ----

// Cобытия focus и blur
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function (e) {
	mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});
*/
/*
Дейсвия могут быть самыми разными:
валидация поля, отправка формы и т.д.
*/

// ----

/*
// Методы elem.focus() и elem.blur()
// устанавливают или снимают фокус.

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 3000);
*/


// ----

/*
Фокусировка на любом элементе с помощью tabindex

Многие элементы по умолчанию не поддерживают фокусировку.
Какие именно – зависит от браузера, но одно всегда верно:
поддержка focus/blur гарантирована для элементов,
с которыми посетитель может взаимодействовать:
<button>, <input>, <select>, <a> и т.д.

С другой стороны, элементы форматирования
<div>, <span> – по умолчанию не могут получить фокус.

Метод elem.focus() не работает для них,
и события focus/blur никогда не срабатывают.

Это можно изменить HTML-атрибутом tabindex.
*/

/*
tabindex = "0" ставит элемент в один ряд
с элементами без tabindex.То есть, при переключении
такие элементы будут после элементов с tabindex ≥ 1.
Обычно используется, чтобы включить фокусировку на элементе,
но не менять порядок переключения.Чтобы элемент мог
участвовать в форме наравне с обычными <input>.

tabindex="-1" позволяет фокусироваться на элементе только программно.
Клавиша Tab проигнорирует такой элемент,
но метод elem.focus() будет действовать.
*/

/*
const lesson = document.querySelector('.lesson');

// Реагируем на событие "в фокусе"
lesson.addEventListener("focus", function (e) {
	lesson.classList.add('_focus');
	console.log('Див lesson в фокусе!');
});
// Реагируем на событие "потеря фокуса"
lesson.addEventListener("blur", function (e) {
	lesson.classList.remove('_focus');
});
*/

// ---

/*
Текущий элемент с фокусом можно получить
из document.activeElement.
*/
//console.log(document.activeElement);

// ---

// События focusin и focusout
// Работают также как и focus/blur но при этом всплывают
/*
const mainForm = document.forms.main;

// Хотим установить фокус на форме при работе с элементами
mainForm.addEventListener("focusin", function (e) {
	mainForm.classList.add('_active');
});
*/
// Споймать на этапе погружения
//, { "capture": true }


//---------------------

// Событие change
// Срабатывает по окончании изменения элемента.

/*
В текстовых input и textarea работает также как
и блур (потеря фокуса), но в select, radio, checkbox и т.д. сразу
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;

mainFormInput.addEventListener("change", function (e) {
	console.log('Сработало change в input');
});
mainFormSelect.addEventListener("change", function (e) {
	console.log('Сработало change в select');
});
mainFormFile.addEventListener("change", function (e) {
	console.log('Сработало change в file');
});
*/

//---------------------

// Событие input
/*
Событие input срабатывает каждый раз при изменении значения.
В отличие от событий клавиатуры, оно работает
при любых изменениях значений, даже если они
не связаны с клавиатурными действиями:
вставка с помощью мыши или распознавание речи при диктовке текста.
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("input", function (event) {
	console.log(`value: ${mainFormInput.value}`);
});
*/

//---------------------

// События cut, copy, paste
// Эти события происходят при вырезании/копировании/вставке данных.

/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("copy", function (event) {
	console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Вставляем`);
});
mainFormInput.addEventListener("cut", function (event) {
	console.log(`Вырезаем`);
});
*/
/*
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Нельзя вставить`);
	event.preventDefault();
});
*/

//---------------------

/*
При отправке формы срабатывает событие submit,
оно обычно используется для проверки (валидации)
формы перед её отправкой на сервер или для
предотвращения отправки и обработки её с помощью JavaScript.
*/
/*
Есть два основных способа отправить форму:
1) нажать кнопку <input type="submit"> или <button type="submit"></button>.
2) нажать Enter, находясь на каком-нибудь поле.
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	console.log('Форма отправляется...');

	// Проверяем поля и если есть ошибки отменяем отправку
	if (!mainFormInput.value) {
		console.log('Поле nameInput не заполнено');
		event.preventDefault();
	}
});
*/

//---------


// События форм и их элементов

// Отправка формы - событие и метод submit
/*
Чтобы отправить форму на сервер вручную,
мы можем вызвать метод form.submit().
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

// Отправляем форму при потере фокуса у nameInput
mainFormInput.addEventListener("blur", function (e) {
	mainForm.submit();
});
*/


//========================================================================================================================================================

// Практические примеры:

/*
// Проверяем ввод email, выводим ошибку
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}*/

// ----

// Практические примеры:
/*
// Выводим картинку после выбора
const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener("change", function (e) {
	let selectedFile = mainFormFile.files[0];

	// Получаем URL изображения
	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});
*/


//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
/*const mainForm = document.forms[0]; // получение конкретной формы 
console.log(mainForm);
/*
*/
/*const mainForm = document.forms.main;
console.log(mainForm.elements) // получение элементов 
*/
/*const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput
const mainFormTextarea = mainForm.nameTextarea;

console.log (mainFormInput.value);
console.log(mainFormTextarea.value);
*/
/*
const mainForm = document.forms.main;
const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;
/*
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);
*/
//mainFormRadioButtons[0].value = "left";
/*const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;
/*console.log(mainFormSelect.options);

const mainFormSelectIndex = mainFormSelect.selectedIndex ;
console.log(mainFormSelectIndex);
const mainFormSeleckValue = mainFormSelect.value;
console.log(mainFormSeleckValue);
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log (mainFormSelectText);
*/
/*let newOption = new Option ("100","4",true , true);
mainFormSelect.append(newOption);
*/
/*let name = prompt("Ваше имя?","");
alert(name);
*//*
let userName = prompt ('Кто там?');
if (userName==Admin){
	alert('Пароль');}
	let pass = prompt;
if(pass = 'Я Главный'){
	alert('Здравствуйте ');
}
else if (pass == ''|| null){
	alert('Отменено');
}
else {
	alert('Не верный пороль');
}
else if (userName==''|| userName==null){
alert('Я Вас не знава');
}
*/
/*
let n = 10 ;
nextPrime
for (let i = 2;i <= n;i++){
for(let j = 2 ;j<i;j++)
if(i%j==0)continue nextPrime;
alert(i);
}
*/
/*const number = +promt ('Введите число между 0 и 3');
switch(number){
	case '0':
		alert('Вы ввели чисто 0')
		break;
	case '1':
		alert('Вы ввели чисто 1	')
		break;
	case '2':
	case '3':
        alert('вы ввели число 2 а может и 3')
		break;
		*/
		

/*let userName = prompt;
if(userName=='Gevorg');

let pass = prompt
alert('Пароль');
if(pass = 'west');
alert('Zdraste');


function pow(x,n){
let result =  x ;
 for (let i = 1; i < n;i++){
 result *= x ;
}
return result;
}
let x = prompt("x?",'');
let n = prompt ("n",'');
if (n<1){
	alert ("stepen ne natural 4ixlo ")
}
else(
	alert(pow(x,n))
)*/
/*
function ask(question,yes,no){
	if(confirm(question))yes()
	else no();
}
ask("вы согласны?"),
()=> alert("Da");
**
for (let i = 10 ; i == 0; i--){
console.log(i)
} // работает 
*/
/*

let i = 11;
while(i < 33){
	console.log(i)
	i++
}

*/






















//////////////////////////////////////////////////////////////// ZADA$I 

//Задача номер 1 с for
/*
for(let i = 1;i < 100 ; ++i)
{ console.log(i);
}

//задача номер 1 while 
let i = 1;
while(i < 100)
{ console.log(i)
++i}
*/


//ЗАДАЧА НОМЕР " 3 "
/*
for(let i=0;i < 100 ;i++){
if ( i % 2) continue
console.log(i)
}*/


//ЗАДАЧА НОМЕР "3"с while
/*
let i = 0;
while(i<100){
	if(i%2) 
	console.log(i)
	i++
}
*/


//////////////////////// ЗАДАЧА (4)  
/*

let sum = 1;
for (let i = 1;i <= 100;i++ ) {
	sum+= i

console.log(sum)
}  

*/



//////// ЗАДАЧА НОМЕР ("5")

/*

let arr = [1,2,3,4,5]
for(let i = 0 ; i < arr.length;i++) {
	console.log(arr[i]);
}

*/

















/////////// ЗАДАЧИ ПО МАССИВАМ  /// ЗАДАЧА (1) и ЗАДАЧА (2)
/*
const arr = ['a','b','c'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
*/


///////////////////////
/*let arr = ['a','b','c','d']; 


arr.splice = [0,1,'6'] удалили и добавили вместо него 
arr.removed = [0, 1] вернули в свое очко 
let arrOne = arr.slice = [ 0 , 1] Копирует массив не с нулевой позиции до первой не включая первую 
*/









///////////////////////// РАБОТА СО СТРОКАМИ /// ЗАДАЧА НОМЕР 1 


 /* let str = 'Привет Мир';
console.log(str);  */ 




///////// ЗАДАЧА НОМЕР " 2"
/*
let str1 = 'Привет,';
let str2 = 'Мир!';
console.log( str1 + str2);

let name1 = 'Alyowka';
console.log(str1 + name1); 

let age = 25;
console.log(`Мне  ${age} лет `);

////////////////////// УМНОЖЕНИЕ МАССИВА 
let arr1 = [2,5,3,9];
result =  arr1[0]*arr1[1] + arr1[2]*arr1[3];
console.log(result);
 


*/
////////////////// функции 
/*
function checkAge(){
	((age > 18 )? true || confirm('Родители разрешили ?'));
}

function minSum(a,b){
if (a < b){
	return a;}
	else{
		return b;
	}
}


function pow(x,n){
	let result = x;
	for (let i = 1; i < n ; i++){
		result *=x;
	}
}*/






/*

const arr2 = [1,2,3,3,4,4,5,6,7,8];
for(let i = 2;i < arr2.length  ; i++) {
	if(arr[i] % 2 ==  0) {
	
	

	console.log(arr2[i]);
}
}*/

//////сумма массива 
/*
const arr3 = [1,2,3,4,5];
let result = 0;
for(let i = 1 ; arr3.length > i ; i++){
result +=arr3[i]
}
console.log(result);


let user = {};
	user.name = "John";
	user.surname ="Smith";
	delete user.name

	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130,
	}
	let sum = 0;
	for(let key in salaries ){
	sum += salaries[key]
	}
	console.log(key)

	function (){
		for( let key in obj){
			if(typeof obj[key] == 'numbers'){
				obj[key] *= 2;
			}

		}
		
	}
*/  /*
const arr = ['joh','lexa','aleksey','alyowa','alyowka','karta','kartowka'];
const arr1 = [];
for(let i = 0;i < arr.length;i++){
	if(arr[i].length == 3) {
		arr1.push(arr[i]);
	}
	
}
console.log(arr1); 
*/
/*
const arr = ['Ali','bali','ebali','bahram'];
 for(let i = 3; i < arr.length; i++) {
 let someUsers = arr.filter(item => item.length < 4);
 console.log(someUsers);
 }

const arr = ['Ali','bali','ebali','bahram','yusif','qandon','lexa','sashka'];
arr.map((Element,index) => console.log(Element, 'map'));
for(let i = 0 ; i < arr.length;i++ ) {
	console.log(arr[i],'for');
}


const arr = ['Ali','bali','ebali','bahram','yusif','qandon','lexa','sashka'];
let test = arr.filter((element, index) => element=='Ali')
console.log(test,'filter')
*/
/*const names = "Ali ,bali ,ebali,bahram,yusif,qandon,lexa,sashka";
const arr = names.split(",");

for (const name of arr) {
  console.log( `Сообщение получат: ${name}.` )
  for(i= 1;i < arr.length;i++);
  console.log(arr);
}
*/
/*

let arr = ['Вася', 'Петя', 'Маша'];

 let str = arr.join(''); 


 for (let arr of str) {
  console.log( `Сообщение получат: ${arr}` );
  for(let i = 1 ;i <arr.length;i++);
  console.log(arr);

 }
*/

/*
const arr = ['Ali','bali','ebali','bahram','yusif','qandon','lexa','sashka','sabolda','Ali'];
 let test = arr.slice((1, 4));
 console.log(test);
 for(let i = 4;i<arr.length;i++){
	 console.log(arr[i]);
 }
 */
/*
function sum(a,b)  {
	return a + b;
}
console.log(`1 + 2 = ${sum(1,2)}.`);

let str = 'Hello'
console.log(str.charAt(0));
console.log(str[3]);
for(let char of 'Hello'){
	console.log(char);
}
alert('hello'.toUpperCase());
 
*
let tes3 = 'вася';
let newTes3 = tes3[0].toUpperCase() + tes3.slice(1);
console.log(newTes3);

let num = 5.8
console.log(Math.floor(5.8));
console.log(Math.round(5.845 * 100) / 100);
*/
/*
let sum = (a,b) => a + b ;
console.log(sum(3,4));

let sum1 = (a,b) => a * b ;
console.log(sum1(3,4));
let str = 'Nikolos'

let hello = () => console.log(`'helloWorld'  ${str} + ${sum1(2,3)}` )
hello() 

  function test1 ($num) {
	  return $num * $num
	  console.log(test1($num));
  }
  test1()
  console.log(test1(214));
  

  function sum(a,b){
	 return a + b
	  
  }
  
  console.log(sum(2,3));
  
 function test3(a,b,c){
	 return (a - b ) / c
 }
 console.log(test3(1,1,1));
 
 */

/*
 function test4(a){
	 if(a === 1){
		console.log("понедельник");
	 }
	 else if (a === 2) {
		console.log ("вторник");
	} else if (a === 3 ) {
		console.log("срела");
	} else if (a === 4) {
		console.log("четверг");
	
	} else if (a === 6) {
		console.log("суббота");
	}
	else if (a === 7) {
		console.log("воскресенье");
   }else 
   console.log("такого дня недели не существует");
}
console.log(test4(10));
*/

/*
function test5(a,b){
	if(a===b){
		return true
	}
	else
	return false
}
console.log(test5(2,3));


function test6(a,b){
	if ( a + b > 10){
		return true
	}
	else {
		return false
	}
}
console.log(test6(4,5));

function test7(a){
	if ( a < 0 ){
		return true
	}
	else {
		return false
	}
}
console.log(test7(-3));



let arr1 = [1,2,3,4,5];
console.log(arr1.slice(2,3));




let arr2 = [1,2,3,4,5];
console.log(arr2.slice(3,5));



let arr3 = [1,2,3,4,5];
arr3.splice(1,2);
console.log(arr3);


let arr4 = [1,2,3,4,5];
arr4.splice(-1,1);
arr4.splice(0,1)
console.log(arr4);


let arr5 = [1,2,3,4,5];
arr5.splice(2,0,"a","b","c")
console.log(arr5);

let arr6 = [1,2,3,4,5];
arr6.splice(2,0,"a","b");
arr6.splice(-1,0,"c");
arr6.splice(8,0,"e");
console.log(arr6);


let arr7 = [3,4,1,2,7]
arr7.sort();
console.log(arr7);










let userInfo = { 
	name: "Aleksey",
	age: 25,
	adress: {
		city: "Baky",
		country: "Azerbaijan",
	},
	showInfo(){
		console.log(`${this.name}, ${this.age} лет . Проживает в ${this.adress.city} `);
	}
}
userInfo.showInfo();



console.log(userInfo.adress.city);
userInfo.bord = "monoBlok";
userInfo['Monday Friday'] = 30 ;
console.log(userInfo);
userInfo.age = 18 ;
console.log(userInfo);

let user1 = Object.assign({},userInfo)
user1.car = "Chevrolet";
console.log(user1);


if( "name" in userInfo) {
	console.log(userInfo.name);
}



if( ['Monday Friday'] in userInfo){
	console.log(userInfo['Monday Friday']);
}



for ( let key in userInfo){
	console.log(key);
}

for( let key in userInfo.adress){
	console.log(key);
}











function UserInfo1(name){
	this.name = name ;
	this.age = 30 ;
}
console.log(new UserInfo1('Вася'));
console.log(new UserInfo1('Дима Билан'));







function makeUser(name,age){
	return{
		name: name,
		age: age,
	}
}
let user = makeUser("Aleks",30);
console.log(user);



let testUser = {};
testUser.name = 'Вася';
testUser.age = 31 ;
console.log(testUser);

testUser.name = 'Лена';
console.log(testUser);

delete testUser.name 
console.log(testUser);


let div = document.getElementById('jsdiv')
div.style.height = "120px";
div.style.background = "red";

let button = document.getElementById('btm')
button.style.height = '20px';
button.style.text = 'Нажми на меня'


let input = document.getElementById('input');
input.vulue = 10 ; 


button.onclick = function(){
	let val = document.getElementById('input').value;
	document.getElementById('jsdiv').innerHTML = " вы ввели " + val
}
button.onclick()
*/
/*
butt.onclick = function() {
	var val = document.getElementById('elem1').value;
	document.getElementById('str').innerHTML="Вы ввели: "+val;
};
*/
// document.getElementByid(['age-table'])
// 
// elem.querySelector('td')
// document.querySelector('form[name="search"]')
// form.querySelector('input')
//form.querySelector('input') 
///inputs[inputs.lenght = -1 ]
/*
function sayThanks() {
	alert('Не тыкай сука ,а введи число')
}
elem1.onclick = sayThanks;
/*

// document.getSelector('button1') function (){
//	getSelector('button1).onclick = true;
// }

/*
button.onclick - function() {
	let val = document.getElementById('input').value;
	dogument.getElementById('elem').innerHTML = "Вы ввели: " +val;
};
*/
/*


but.onclick = function(){
	let val = document.getElementById('inp').value;
	document.getElementById('elem1').innerHTML = 'вы введли ' +val;
	alert(`${val}`)
}

let div = document.getElementById('elem1')
div.style.height = "100px"
div.style.backgroundColor = "red" ;
div.style.outline = "500px";


let input = document.getElementById('inp');
input.style.position = "center";
input.style.height = "50px";
input.style.textAlign = "center"
function sayThanks(){
	alert("Не тыкай")
}
elem1.onclick = sayThanks ;

let div2 = document.getElementById('elem2')
div2.style.height = '100px'
div2.style.backgroundColor = "blue"
div2.style.textAlign = "center"

function helo(){
	prompt("Введите число"," ")
}
elem2.onclick = helo;
*/

function insert(num) {
	document.form.textview.value =
    document.form.textview.value + num;
}
function clean(){
	document.form.textview.value = " " ;
}
function back(){
	let exp =  document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.lenght-1);
}
/*
function equal(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
	}
}
*/

/*
var queue = [];
var input = 0;
function calculateQueue(value){
	if (input !==0) {
	input = parseFloat(input);

		addToQueue(input);
					}
	var answer = value[0];
	var dividedByZero = 0;
	for (  var i = 2; i < value.length; i= i+2) {

		switch (queue[i-1]) {
			case '+':
				answer+= value[i];
				break;
			case '-':
				answer-= value[i];
				break;
			case '/':    if (value[i] === 0)   dividedByZero = 1;
					else      answer = answer / value[i];

				break;
			case'*': answer = answer * value[i];
				break;
		}
	}
	answer = answer.toFixed(10);
	answer = parseFloat(answer);
	if ( dividedByZero === 1) { clearAll();
		document.getElementById("answer").innerHTML =  "ERROR";}
	else
	{document.getElementById("answer").innerHTML =  answer ;
		input = answer;
	queue = []; } 
}
*/
/*
let a = '';
let b = '';
let sign = '';
let finish = false ;

const digit = ['0','1','2','3','4','5','6','7','8','9'];


const action = ['+','-','*','/','='];
*/

/*
let rav = document.getElementById('container')

function ravno(a,b){
	const action = ['+','-','*','/','='];

    let sign = '';
	switch(sign){
		case "+":
			a = (+a) + (+b);
			break;
			case "-":
			a= a - b;
			break;
			case "*":
			a = a * b;
			break;
			case "/":
			a = a / b;
			break;
	}
	
console.log(sign);
}
console.log("rav")
*/
/*
function ravno(a,b){
	let result = 0;
	var exp = document.form.textview.value;
	
	switch(exp){
		case "+":
			a = (+a) + (+b);
			break;
			case "-":
			a= a - b;
			break;
			case "*":
			a = a * b;
			break;
			case "/":
			a = a / b;
			break;
	}
	console.log(exp);
}
*/

function ravno(a,b){
	
	var exp = document.getElementById('inp');
	let result = 0;
	switch(exp){
		case "+":
			result = (+a) + (+b);
			return result;
			case "-":
			result = a - b;
			return result;
			case "*":
			result = a * b;
			return result;
			case "/":
			result = a / b;
			return result;
	}
	console.log(result);
}

/*

let test44 = document.getElementById('conculate')
function ravno(a,b){
	let exp = 0 ;{
	if(exp =  '+')
	return a + b;
	else if ( exp ="-")
	return a - b;
	else if ( exp = "*")
	return a * b;
	else if (exp = "/")
	return a / b
	else{

	}
}
	console.log(exp);
}
console.log(test44)
 
let elem1 = document.getElementById('answer');
answer.onclick = ravno ;
*/
/*
function equal(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
	}
}

function equal(a,b){
	var exp = document.form.textview.value;
	if(document.form.textview.value = "+"){	
	exp = a + b
	return exp;
	*/