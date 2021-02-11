import Field from './field.js';
import * as sound from './sound.js';

/*
Builder Pattern
빌더패턴을 사용함으로 인해 Game클래스를 외부에 노출시키지않고
간단 명료하게 값을 설정할 수 있다
*/
export default class GameBuilder {
    gameDuration(duration)  {
        this.gameDuration = duration;
        return this;
    }

    carrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    bugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        );
    }
}

class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameBtn = document.querySelector('.game__button');
        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn.addEventListener('click', () => {                
            if(this.started) {
                this.stop();
            } else {
                this.start();
            }    
        });

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }
    
    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    start() {
        this.started = true;
        this.initGame();
        this.startGameTimer();
        this.showStopButton();
        this.showTimerAndScore();
        this.gameField.init();
        sound.playBackground();
    }
    
    stop() {
        this.started = false;    
        this.stopGameTimer();
        this.hideGameButton();
        //this.gameFinishBanner.showWithText('REPLAY?');    
        sound.playAlert();
        sound.stopBackground();
        this.onGameStop && this.onGameStop('cancel');
    }

    finish(win) {
        this.started = false;       
        this.hideGameButton();  
        if(win) {        
            sound.playWin();             
        }else {        
            sound.playBug();               
        }
        this.stopGameTimer();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(win? 'win' : 'lose');
    }

    onItemClick = (item) => { //이벤트위임
        if(!this.started) {
            return;
        }    
        if(item === 'carrot') { //당근        
            this.score++;        
            this.updateScoreBoard();
            if(this.score === this.carrotCount) {
                this.finish(true);
            }
        } else if(item === 'bug') { //벌레                
            this.finish(false);
        }
    };
    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }
    
    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }
    
    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }
    
    startGameTimer() {    
        // console.log('hi'+this.gameDuration);
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(()=>{
            if(remainingTimeSec <= 0) {
                clearInterval(this.timer);
                this.finish(this.carrotCount === this.score);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);    
    }
    
    stopGameTimer() {
        clearInterval(this.timer);    
    }
    
    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`
    }
    
    initGame() {
        this.score = 0;    
        this.gameScore.innerText = this.carrotCount;           
        this.gameField.init();        
    }
    
    updateScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }
}