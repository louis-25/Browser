'use strict'

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick) { //main.js에서 click이벤트 발생시 popup모듈의 onClick에 할당해준다
        this.onClick = onClick;
    }

    showWithText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    }

    hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}