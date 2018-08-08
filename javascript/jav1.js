var budget = parseInt(prompt('Ваш бюджет?'));
var name = prompt('Введите имя вашего магазина');
mainList = {
	budget: budget,
	name: name,
	shopGoods: [],
	employers: {
		name: "Василий",
		age: 25,
		gender: "male",
	},
	open: true,
};
while (mainList.shopGoods.length < 3) {
	let a = prompt('Какой тип товара будем продавать?');
	if (( typeof(a)) !== 'string' || ( typeof(a)) == null || a == '' || a.length > 50 ) {
		alert('Неправильнно введенный тип товаров!!!');
		console.log('Неверно!!!');
	} else {
		mainList.shopGoods[mainList.shopGoods.length] = a;
	}
}
alert('Ваш бюджет: ' + Math.round(mainList.budget / 30) );
console.log(mainList.shopGoods);