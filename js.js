

/* Это объявление переменной, мы наши кнопку по тегу */
const button_link = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button_link.addEventListener('click', function() {
	alert('Интересное тестирование!')
})