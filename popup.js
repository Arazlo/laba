const paymentButton = document.querySelector('.payment__button');
const popup = document.querySelector('.popup_type_payment');


paymentButton.addEventListener('click', function(){
    popup.classList.add('popup_opened');
});
popup.addEventListener('click', function(evt){
    if(evt.target.classList.contains('popup')){
        popup.classList.remove('popup_opened');
    }
});

