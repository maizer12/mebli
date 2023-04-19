//акордион
export default $('#accordion-product').accordion({
	active: null,
	collapsible: true,
	heightStyle: 'content',
})
$('#accordion-product-adapt').accordion({
	active: null,
	collapsible: true,
	heightStyle: 'content',
})

const byNow = document.querySelector('#by-now')
const popupMy = document.querySelector('.popup')
const successfulBtn = document.querySelector('#successful-btn')
const closeSuccessful = document.querySelector('#successful-close')
byNow?.addEventListener('click', ()=> {
	popupMy?.classList.add('popup-order-open')
})
successfulBtn?.addEventListener('click', ()=>{
	popupMy?.classList.remove('popup-order-open')
	popupMy?.classList.add('popup-successful-open')
})
closeSuccessful?.addEventListener('click', ()=> {
	popupMy?.classList.remove('popup-successful-open')
	
})