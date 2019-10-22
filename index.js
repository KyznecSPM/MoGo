/*
Замена цвета блока по клику
- на блоке стоит обработчик клика
- получаем массив эллементов с классом box
- при срабатывании обработчика onclick выполняется функция
changeColor(). Из массива берется нулевой элемент, и изменяется свойство
*/
var colorArray = document.getElementsByClassName('box');

function changeColor() {
	if(colorArray[0].style.background === 'black') {
		return colorArray[0].style.background = 'yellow'
	}
	if(colorArray[0].style.background === 'yellow') {
		return colorArray[0].style.background = 'red'
	}
	colorArray[0].style.background = 'black'
}


