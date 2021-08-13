function start(){
    var selectPlayer = document.getElementById('selectPlayer');
    selectPlayer.style.display = 'none';

    //div for the game
    let gameDiv = document.createElement('div');
    gameDiv.setAttribute('id', 'gameDiv');
    gameDiv.setAttribute('class', 'gameDiv');
    document.body.append(gameDiv);

    //table for the game
    let gameTable = document.createElement('table');
    gameTable.setAttribute('id', 'gameTable');
    gameTable.setAttribute('class', 'gameTable');
    gameDiv.append(gameTable);

    //for loop to generate rows
    for(let colums = 1; colums <= 3; colums++){
        let rowsTr = document.createElement('tr');
        gameTable.append(rowsTr);

        //for loop to generate inputs
        for(let rows = 1; rows <= 3; rows++){
            var gameInps = document.createElement('input');
            gameInps.setAttribute('id', 'gameInps' + rows + colums);
            gameInps.setAttribute('class', 'gameInp');
            rowsTr.append(gameInps);
        }
    }

    //this is the button which will check who won
    let whoWon = document.createElement('button');
    whoWon.setAttribute('class', 'whoWon');
    whoWon.innerHTML = 'Save';
    whoWon.setAttribute('id', 'whoWon');
    gameDiv.append(whoWon);

    whoWon.addEventListener('click', function(){
        var result = document.createElement('h1');
        result.setAttribute('class', 'result');

        var i = document.getElementById('gameInps11').value;
        
        if(i == '1'){
            console.log('code is working');
        } else {
            console.log('code is not working');
        }
    });
} 