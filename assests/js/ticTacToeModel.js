app.factory("gameModel", () => {

    

    initializeBoxes = () => {
        for (let i = 1; i < 10; i++) {
            var box = new Boxes();
            box.index = i;
            ticTacToe.boxes.push(box);
        }
        return ticTacToe.boxes;
    }

    

    return ticTacToe;
});