app.controller("gameController", ($scope, gameModel) => {
    // html=>model/factory=>controller
    // $scope.pl1Score = ticTacToe.player1;
    // $scope.pl2Score = ticTacToe.player2;
    $scope.board = ticTacToe;
    $scope.boxes = initializeBoxes();
    var currentPlayer = true; //true : player1, false :player2
    $scope.currentPlayer = "X";

    $scope.playerMove = (boxClicked) => {
        // console.log($scope.boxes[boxClicked].state);
        if ($scope.boxes[boxClicked].state == -1) {
            if (currentPlayer) {
                $scope.boxes[boxClicked].setState(1);
            } else {
                $scope.boxes[boxClicked].setState(0);
            }
            ticTacToe.checkForWin();
            currentPlayer = !currentPlayer;
            if (currentPlayer) {
                $scope.currentPlayer = "X";
            } else {
                $scope.currentPlayer = "O";
            }
        }
    }



})