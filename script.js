function start(){
    var selectPlayer = document.getElementById('selectPlayer');
    selectPlayer.style.display = 'none';

    //div for the game
    let gameDiv = document.createElement('div');
    gameDiv.setAttribute('id', 'gameDiv');
    gameDiv.setAttribute('class', 'gameDiv');
    document.body.append(gameDiv);

    let message = document.createElement('h1');
    message.setAttribute('class', 'message');
    message.innerHTML = 'x = player 1, o = player 2';
    gameDiv.append(message);

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

        //if else statements for x (player 1)
        if(document.getElementById('gameInps11').value == 'x' && document.getElementById('gameInps21').value == 'x' && document.getElementById('gameInps31').value == 'x'){
            alert('Player 1 wins!')            
        } else if(document.getElementById('gameInps12').value == 'x' && document.getElementById('gameInps22').value == 'x' && document.getElementById('gameInps32').value == 'x'){
            alert('Player 1 wins!')            
        } else if(document.getElementById('gameInps13').value == 'x' && document.getElementById('gameInps23').value == 'x' && document.getElementById('gameInps33').value == 'x'){
            alert('Player 1 wins!')
        } else if(document.getElementById('gameInps11').value == 'x' && document.getElementById('gameInps12').value == 'x' && document.getElementById('gameInps13').value == 'x'){
            alert('Player 1 wins!')
        } else if(document.getElementById('gameInps21').value == 'x' && document.getElementById('gameInps22').value == 'x' && document.getElementById('gameInps32').value == 'x'){
            alert('Player 1 wins!')
        } else if(document.getElementById('gameInps31').value == 'x' && document.getElementById('gameInps32').value == 'x' && document.getElementById('gameInps33').value == 'x'){
            alert('Player 1 wins!')
        } else if(document.getElementById('gameInps31').value == 'x' && document.getElementById('gameInps22').value == 'x' && document.getElementById('gameInps13').value == 'x'){
            alert('Player 1 wins!')
        } else if(document.getElementById('gameInps11').value == 'x' && document.getElementById('gameInps22').value == 'x' && document.getElementById('gameInps33').value == 'x'){
            alert('Player 1 wins!')
        }

        //if else statements for o (player 2)
        if(document.getElementById('gameInps11').value == 'o' && document.getElementById('gameInps21').value == 'o' && document.getElementById('gameInps31').value == 'o'){
            alert('Player 2 wins!')            
        } else if(document.getElementById('gameInps12').value == 'o' && document.getElementById('gameInps22').value == 'o' && document.getElementById('gameInps32').value == 'o'){
            alert('Player 2 wins!')            
        } else if(document.getElementById('gameInps13').value == 'o' && document.getElementById('gameInps23').value == 'o' && document.getElementById('gameInps33').value == 'o'){
            alert('Player 2 wins!')
        } else if(document.getElementById('gameInps11').value == 'o' && document.getElementById('gameInps12').value == 'o' && document.getElementById('gameInps13').value == 'o'){
            alert('Player 2 wins!')
        } else if(document.getElementById('gameInps21').value == 'o' && document.getElementById('gameInps22').value == 'o' && document.getElementById('gameInps32').value == 'o'){
            alert('Player 2 wins!')
        } else if(document.getElementById('gameInps31').value == 'o' && document.getElementById('gameInps32').value == 'o' && document.getElementById('gameInps33').value == 'o'){
            alert('Player 2 wins!')
        } else if(document.getElementById('gameInps31').value == 'o' && document.getElementById('gameInps22').value == 'o' && document.getElementById('gameInps13').value == 'o'){
            alert('Player 2 wins!')
        } else if(document.getElementById('gameInps11').value == 'o' && document.getElementById('gameInps22').value == 'o' && document.getElementById('gameInps33').value == 'o'){
            alert('Player 2 wins!')
        }        
    });
} 
