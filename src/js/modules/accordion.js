//таби
$(function () {
	$('#tabs').tabs()
})

//другое

const byNow = document.querySelector('#by-now')
const popupMy = document.querySelector('.popup')
const successfulBtn = document.querySelector('#successful-btn')
const closeSuccessful = document.querySelector('#successful-close')
const body = document.querySelector('body')
let check = true
byNow?.addEventListener('click', () => {
	body?.classList.add('popup-order-open')
	setTimeout(()=> {
		check = false
	}, 100)
})
successfulBtn?.addEventListener('click', () => {
	body?.classList.remove('popup-order-open')
	body?.classList.add('popup-successful-open')
})
closeSuccessful?.addEventListener('click', () => {
	body?.classList.remove('popup-successful-open')
	check = true
})
body?.addEventListener('click', handleClick)

function handleClick(event) {
	const body = document.querySelector('body')
	const popupOrderOpen = body.classList.contains('popup-order-open')
	if (popupOrderOpen && !check) {
		console.log(123)
		const popupOrder = document.querySelector('.popup-order__inner')
		const isClickInsidePopup = popupOrder.contains(event.target)
		if (!isClickInsidePopup) {
			check = true
			body.classList.remove('popup-order-open')
		}
	}
}
