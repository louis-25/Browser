'use strict';

import PopUp from './popup.js';
import * as sound from './sound.js';
import { GameBuilder, Reason } from './game.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .gameDuration(GAME_DURATION_SEC)
    .carrotCount(CARROT_COUNT)
    .bugCount(BUG_COUNT)
    .build();

game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason) {
        case Reason.cancel:
            message = 'Replay?';
            sound.playAlert();;
            break;
        case Reason.win:
            message = 'YOU WON!';
            sound.playWin();
            break;
        case Reason.lose:
            message = 'YOU LOST';
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason');           
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=> {
    game.start();
});