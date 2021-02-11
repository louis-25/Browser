'use strict';
import * as sound from './sound.js';

const CARROT_SIZE = 80;
export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect(); //field의 전체적인 size와 position을 알 수 있다
        /*
        this는 어떤 클래스 안에 있는 함수를 다른 콜백으로 전달할 때는 그 함수가 포함
        되어져 있는 클래스의 정보가 사라진다
        그래서 this와 함수를 바인딩해줘야 한다 (화살표함수)
        */
        this.field.addEventListener('click', event => this.onClick(event))
    }

    init() {
        this.field.innerHTML = '';
        this._addItem('carrot', this.carrotCount, 'img/carrot.png');
        this._addItem('bug', this.bugCount, 'img/bug.png');
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }

    _addItem(className, count, imgPath) {
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y2 = this.fieldRect.height - CARROT_SIZE;
        
        for(let i = 0 ; i < count ; i++) {
            const item = document.createElement('img');
            item.setAttribute('class',className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    }

    onClick(event) {
        const target = event.target;
        if(target.matches('.carrot')) { //당근
            target.remove();            
            sound.playCarrot();
            this.onClick && this.onItemClick('carrot');            
        } else if(target.matches('.bug')) { //벌레                
            this.onItemClick && this.onItemClick('bug');
        }
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
