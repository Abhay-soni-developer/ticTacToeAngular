const ticTacToe = {
    player1: 0,
    player2: 0,
    boxes: [],
    audio: null,
    statusPlayerWon:"",

    winningConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],


    getPlayer1Score(player) {
        if (player == 1) {
            return this.player1;
        } else {
            return this.player2;
        }
    },

    incrementWinnerScore(player) {
        if (player == 1) {
            this.player1++;
        } else if (player == 0) {
            this.player2++;
        } else {
            console.log("unexpected Condition");
        }
        this.playWinSound();
        this.statusBar(player);
        this.resetBoard();
    },

    //when status Player won is st to " " still it shows old value
    statusBar(playerWhoWon){

        if(playerWhoWon==1){
            this.statusPlayerWon="X Won";
        }else if(playerWhoWon==0){
            this.statusPlayerWon="O Won";
        }
        setTimeout( ()=>{
            this.statusPlayerWon=" ";
        }, 2000);
    },

    checkForWin() {
        for (let i = 0; i < this.winningConditions.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (ticTacToe.boxes[this.winningConditions[i][0]].state == j && ticTacToe.boxes[this.winningConditions[i][1]].state == j && ticTacToe.boxes[this.winningConditions[i][2]].state == j) {
                    // increment player score, make a winning sound , reset board
                    this.incrementWinnerScore(j);
                }
            }
        }
    },

    resetBoard() {
        for (let i = 0; i < this.boxes.length; i++) {
            this.boxes[i].setState(-1);
        }
    },

    playWinSound() {
        if (this.audio == null) {
            this.audio = document.createElement('audio');
            this.audio.src = '/assests/audios/Win.mp3';
        }
        this.audio.play();
    }

}